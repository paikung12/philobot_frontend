<template>
<div>
    <div class="bg-green-400  border-white shadow-xl  rounded-3xl p-4 ">
        <div class="flex-none sm:flex">
            <div class="flex-auto sm:ml-5 justify-evenly">
                <div class="flex items-center">
                    <div class="flex flex-col">
                        <div class="w-full flex-none text-lg text-white font-bold leading-none">
                            <v-icon class="mr-2" size="20">em em-money_with_wings</v-icon>Cash out
                        </div>
                        <div class="flex flex-row items-center justify-end">
                            <div class="flex-auto text-white my-1">
                                <span class="mr-3 ">Customers can exchange points for cash.</span>
                            </div>
                            <v-btn @click="active=!active" rounded fab>
                                <v-icon>mdi-arrow-right</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <vs-dialog prevent-close v-model="active">
        <template #header>
            <h2 class="not-margin mt-6 text-xl">
                <v-icon size="30" class="me-3">em em-money_with_wings</v-icon>
                <b>CASH OUT</b>
            </h2>
        </template>
        <v-card-title>

        </v-card-title>
        <v-alert class="ml-12 mr-12" outlined dense type="info" prominent border="left">
            Please fill out the information completely.</v-alert>
        <v-card-text  >

            <div class="flex">
                <div class="w-3/5">
                    <Core-TierCard></Core-TierCard>
                </div>
                <div class="w-2/5">
                    <form @submit.prevent="cashout()" class="p-6">
                        <v-row> 
                            <v-col cols="12" md="12">
                                <v-alert v-if="Number(form.point) > Number(point.current)" type="error"> More than the points </v-alert>
                                <v-text-field type="number" min="100" max="9999" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" required label="Point to Cashout" v-model="form.point" prepend-inner-icon="mdi-bitcoin" outlined dense id="firstname" hide-details></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12">
                                <v-text-field required label="Name" v-model="form.name" prepend-inner-icon="em em-male-technologist" outlined dense id="Name" placeholder="Name" hide-details></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12">
                                <v-text-field oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" required label="Bank Account Number" v-model="form.bank_code" prepend-inner-icon="em em-lock" outlined dense id="firstname" placeholder="Bank Account Number" hide-details></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12">
                                <v-autocomplete required label="Name Bank" item-text="value" item-value="value" :items="bankList" v-model="form.bank_name" prepend-inner-icon="em em-bank" outlined dense id="Name" placeholder="Name Bank" hide-details></v-autocomplete>
                            </v-col>

                            <vs-button v-if="(Number(form.point) <= Number(point.current)) && (form.bank_name != null) " type="submit" floating color="#4ade80" class="w-full py-3 mt-6 font-medium">
                                Cashout
                            </vs-button>
                        </v-row>
                    </form>
                </div>
            </div>
 

        </v-card-text>

    </vs-dialog>

</div>
</template>

<script>
import {
    CashOut
} from '~/vuexes/cashout'
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
import {
    Web
} from '~/vuexes/web'
export default {
    data: () => ({
        form: {},
        bankList: [],
        active: false,
    }),
    async created() {
        await this.startup()
    },
    methods: {
        async startup() {
            this.bankList = await Core.getChoice('bank')
        },
        async cashout() {
            this.active = false
            let check = await Web.confirm(`Are You Sure ?`)
            if (check) {
                this.form.user = Auth.user.id
                let out = await CashOut.postCashout(this.form)
                if (out.id) {
                    await Auth.cutPoint(this.form.point)
                    await Auth.logPoint(`Cash Out`, this.form.point, 1)
                }
                this.form = {}
                this.$emit('reload', false)
                this.$router.push('/')
            } else {
                //this.form = {}
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
    },
    watch: {
        active(val) {

        }
    }
}
</script>
