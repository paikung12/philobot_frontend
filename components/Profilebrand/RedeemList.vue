<template>
<div>
    <v-item-group>
        <v-container v-if="response">
            <div class="flex flex-col md:flex-row">
                <div class="w-1/2">

                </div>
                <div class="w-1/2">
                    <div class="flex flex-col md:flex-row">
                        <v-select @change="startup()" v-model="sortBy" :items="sorts" item-text="text" item-value="value" class="mr-2" dense outlined label="Sort By Point"></v-select>
                    </div>
                </div>
            </div>

            <v-row>
                <v-col v-for="storeproduct,n in storeproducts" :key="n" sm="4" lg="6" md="8" xl="3">
                    <vs-card>
                        <template #title>
                            <div class="flex justify-between ">
                                <h3 class=" text-2xl mt-1">{{storeproduct.name}}</h3>
                                <h3 class="text-green-400">
                                    {{$comma(storeproduct.point_use)}} Point
                                </h3>
                            </div>

                        </template>
                        <template #img>
                            <div class="h-64 w-full ">
                                <img :src="$url+storeproduct.image" alt="" />
                            </div>
                        </template>
                        <template #text>
                            <div class="h-20">
                                <p class="textellipsis mt-1">
                                    {{storeproduct.detail}}
                                </p>
                            </div>
                            <v-btn rounded v-if="point.current >= storeproduct.point_use" block color="#4ade80" class="btn-redeem mt-5" @click="postRedeem(storeproduct)">
                                 <p class=" text-white"> Redeem</p>
                            </v-btn >
                            <v-btn  v-else rounded block disabled color="#425466" class=" mt-5 ">
                                Your point not enough
                            </v-btn >
                        </template>
                        <template #interactions>

                        </template>
                    </vs-card>
                </v-col>
            </v-row>

        </v-container>
    </v-item-group>
</div>
</template>

<script>
import {
    Store
} from '~/vuexes/store'
import {
    Web
} from '~/vuexes/web'
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
import _ from 'lodash'
export default {
    watch: {},
    data: () => ({
        storeproducts: [],
        response: false,
        form: {},
        sortBy: 'asc',
        sorts: [{
                'text': 'Ascending',
                value: 'asc'
            },
            {
                
                'text': 'Descending',
                value: 'desc'
            },
        ]
    }),
    async created() {
        await this.startup()
        this.response = true
    },
    methods: {
        async startup() {
            this.storeproducts = await Core.getHttp('/api/store/product/?is_active=true')
            this.storeproducts = _.orderBy(this.storeproducts, ['point_use'], [this.sortBy])
        },
        async getRedeem() {
            let check = await Web.confirm('Thank you for the Redeem')
            if (check) {
                await this.$router.push('/transaction')
            } else {}
        },
        async postRedeem(product) {
            let check = await Web.confirm('Do you want to Redeem')
            if (check) {
              if (this.point.current >= product.point_use )  {
                this.form.user = Auth.user.id
                let code = 'RD' + Date.now()
                let redeem = await Core.postHttpAlert(`/api/store/rewardhistory/`, {
                    "code": code,
                    "point_use": product.point_use,
                    "status": 0,
                    "remark": "*Customers can cancel the transaction. can be traded",
                    "product": product.id,
                    "user": Auth.user.id,
                })
                await Auth.cutPoint(product.point_use)
                await Auth.logPoint(`Redeem ${code}`,product.point_use,1)
                await this.$router.push('/')
            }else{
                await Web.alert(`More than point`,`error`)
              }

            }
        },

    },
    computed: {
        imageStoreProduct() {
            return Store.image
        },
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

    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
}

.textellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}


.btn-disable {
    box-shadow: 0 1px 20px 1px #425466 !important;
}
.btn-redeem {
    box-shadow: 0 1px 20px 1px #4ade80 !important;
}

</style>
