<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button class="btn-chat" color="#0052F9" @click="active=!active">
                <span class="span">
                    Purchase
                </span>
            </vs-button>
            <vs-dialog prevent-close max-width="500px" persistent v-model="active">
                <template #header>
                    <h4 class="not-margin mt-6">
                        <v-icon size="20" class="me-3">em em-chart_with_upwards_trend</v-icon>
                        <b> Purchase to {{ea.name}}</b>
                    </h4>
                </template>
                <v-card-title>

                    <v-spacer></v-spacer>

                </v-card-title>
                <v-card-text class="p-6">
                    <h2 v-if="oldPrice" class="line-through ">{{oldPrice}}</h2>
                    <v-alert dense outlined type="error" v-if="error != ''">{{error}}</v-alert>

                    <form ref="eaForm" @submit.prevent="checkPayment()">
                        <div class="bg-yellow-100 p-3 rounded-xl">
                            <h2><b>EA Price</b> : {{ea.price}}</h2>
                            <h1><b>Discount Point</b> : {{moneyPoint}} </h1>
                            <h2><b>Discount Code {{myDiscount.name}} </b> : {{discountPrice}} </h2>
                            <h1 class="text-base"><b>Total Price: {{totalPrice}} </b></h1>
                        </div><br>
                        <v-autocomplete @change="prepareStore()" v-model="form.account_type" label="Account No" outlined :items="accLists" item-text="account_no" item-value="id"></v-autocomplete>
                        <v-text-field type="number" min="0" max="999" @input="prepareStore()" v-model="usePoint" label="Point" outlined></v-text-field>
                        <v-text-field @input="prepareStore()" label="Discount" v-model="discount" outlined></v-text-field>
                        <vs-button v-if="isStore" block color="#4ade80" floating type="submit" class="mt-5"> Purchase </vs-button>
                    </form>
                </v-card-text>
            </vs-dialog>

            <vs-dialog v-model="payment">
                <template #header>
                    <h4 class="not-margin mt-6">
                        <v-icon size="20" class="me-3">em em-chart_with_upwards_trend</v-icon>
                        <b> Purchase to {{ea.name}}</b>
                    </h4>
                </template>
                <v-card-text>
  <center>                    <img class="w-40" src="https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" alt="">
</center>
                  </v-card-text>
            </vs-dialog>
        </div>
    </template>
</div>
</template>

<script>
import {
    Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
    Auth
} from '@/vuexes/auth'
export default {
    props: {
        ea: {
            default: {}
        }
    },
    data: () => ({
        payment: false,
        broker: [],
        active: false,
        form: {},
        accLists: [],
        ea: {},
        discountActive: false,
        discount: '',
        myDiscount: {},
        oldPrice: 0,
        usePoint: 0,
        runUsePoint: false,

        error: "",
        tmpPrice: 0,
        canUsePoint: false,
        moneyPoint: 0,
        discountPrice: 0,
        totalPrice: 0,
        isStore: false
    }),
    async created() {
        await this.startup()
    },
    methods: {
        async startup() {
            this.broker = await Core.getHttp(`/api/finance/broker/?is_active=true`)
            let all = await Core.getHttp(`/api/finance/brokeraccount/?user=${this.user.id}&status=1`)
            let filter = _.filter(all, (o) => {
                _.map(this.ea.broker, (p) => {
                    if (o.broker == p) {
                        this.accLists.push(o);
                    }
                });
            });
            this.tmpPrice = this.ea.price
            this.error = ''

        },
        async getDiscount() {
            let dis = await Core.getHttp(`/api/webconfig/promotion/?code=${this.discount}&is_active=true`)
            if (dis.length > 0) {
                this.myDiscount = dis[0]
                this.oldPrice = this.ea.price
                this.ea.price = this.ea.price - this.myDiscount.discount
                this.discountActive = true
            } else {

                this.discountActive = false
            }
        },

        async checkPoint() {
            let moneyPoint = this.usePoint * this.setting.point_to_us
            let calulatePrice = this.ea.price - moneyPoint
            if (this.usePoint > 0) {
                if (calulatePrice >= 0) {
                    this.moneyPoint = moneyPoint
                    this.totalPrice = calulatePrice
                    return true;
                } else {
                    this.moneyPoint = 0
                    this.totalPrice = this.ea.price
                    return false
                }
            } else {
                this.moneyPoint = 0
                this.totalPrice = this.ea.price
                return true
            }

        },
        async checkDiscount() {
            let dis = await Core.getHttp(`/api/webconfig/promotion/?code=${this.discount}&is_active=true`)
            dis = await _.filter(dis, {
                code: this.discount
            })
            if (dis.length > 0) {
                this.myDiscount = dis[0]
                this.discountPrice = Number(this.myDiscount.discount)
                let useDiscount = this.totalPrice - this.discountPrice
                // console.log(useDiscount, this.totalPrice, this.discountPrice);
                if (useDiscount >= 0) {
                    this.discountPrice = this.myDiscount.discount
                    this.totalPrice = this.totalPrice - this.discountPrice
                    //  console.log('[A]',useDiscount, this.totalPrice, this.discountPrice);
                    return true;
                } else {
                    this.discountPrice = this.myDiscount.discount
                    this.totalPrice = 0
                    return true;
                }
            } else {
                this.myDiscount = {}
                this.totalPrice = this.ea.price - this.moneyPoint
                this.error = (this.discount != '') ? 'Code is not use' : ''
                this.discountPrice = 0
                this.discountActive = false
                return true
            }
        },

        async prepareStore() {
            this.error = ''
            this.isStore = true
            if (!this.form.account_type) {
                this.error = "Must Select Account No"
                this.isStore = false
            } else if (!await this.checkPoint()) {
                this.usePoint = 0
                this.error = "More than the actual price"
                this.isStore = false
            } else if (!await this.checkDiscount()) {
                this.isStore = false
            } else {
                this.isStore = true
                this.error = ""
            }

        },

        async checkPayment() {
            if (this.totalPrice > 0) {
                this.active = false
                this.payment = true;
            } else {
                await this.store();
            }
        },

        async store() {
            let ac_type = _.find(this.accLists, {
                id: this.form.account_type
            })
            let broker = _.find(this.broker, {
                id: ac_type.broker
            })

            if (ac_type.id && broker.id) {
                this.form.code = 'EA' + Date.now()
                this.form.broker = broker.id
                this.form.product = this.ea.id
                this.form.user = this.user.id
                this.form.use_point = this.usePoint
                if (this.myDiscount.id) {
                    this.form.use_promotion = this.myDiscount.discount
                    this.form.promotion = this.myDiscount.id
                }

                let data = await Core.postHttpAlert(`/api/ea/order/`, this.form)
                if (data.id) {
                    if (this.usePoint > 0) {
                        await Auth.cutPoint(this.usePoint)
                        await Auth.logPoint(`EA ${this.ea.name} Use Point `, this.usePoint, 1)
                        this.active = false
                        this.$router.push('/accountstatus?tab=0')
                    } else {
                        this.active = false

                    }
                } else {

                }
            }

        }

    },
    computed: {
        user: () => {
            return Auth.user
        },
        point: () => {
            return Auth.point
        },
        tier: () => {
            return Auth.tier
        },
        tiers: () => {
            return Auth.tiers
        },
        setting: () => {
            return Auth.setting
        },

    },
    watch: {
        active(val) {
            this.form = {}
            this.error = ""
            this.usePoint = ''
            this.discount = ''
        }
    }
}
</script>

<style scoped>

</style>
