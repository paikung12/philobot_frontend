<template>
<div class="" v-if="response">
    <div class="p-8 ">
             <v-data-table :search="search" :headers="headers" :items="items" class="elevation-1">
                <template v-slot:item.product="{ item }">
                    <div class="flex">
                        <img class="h-6" :src="item.product_image" alt=""> <span class="ml-2">{{item.product}}</span>
                    </div>
                </template>
                <template v-slot:item.broker="{ item }">
                    <div class="flex">
              
                        <img class="h-6" :src="item.broker_image" alt=""> <span class="ml-2">{{item.broker}}</span>
                        {{item.broker}} 
                        </div>
                </template>
                <template v-slot:item.account_no="{ item }">
                    <div class="flex">
                        
                        <img class="h-6" :src="item.account_type_image" alt=""> <span class="ml-1">{{item.account_no}}</span>
                    </div>
                </template>

                <template v-slot:item.status="{ item }">
                    <Core-Status :status="item.status" />
                </template>
            </v-data-table>
    </div>
</div>
</template>

<script>
import {
    HistoryAccount
} from '~/vuexes/historyaccount'
import {
    Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
    Auth
} from '@/vuexes/auth'
export default {
    data: () => ({
        items:[],
        response: false,
        filterProduct: [],
        filterBroker:[],
        filterAccountType:[],
        listFilerProduct: [],
        listsFilterAccount:[],
        listsFilterBroker:[],

        no: 1,
        headers: [{
                text: 'Order Number',
                value: "code",

            },
            {
                text: 'Order',
                value: "product",

            },
            {
                text: 'Broker',
                value: "broker",

            },
            {
                text: 'Account No',
                value: "account_no",

            },
            {
                text: 'Account Type',
                value: "account_type",

            },
            
            {
                text: 'Price',
                value: "price",

            },
            {
                text: 'Date',
                value: "created_at",

            },
            {
                text: 'Status',
                value: "status",

            },
            {
                text: 'Remark',
                value: "remark",

            },
        ],
      myBrokerAccounts:[]
    }),
    async created() {
        await this.startup();
        this.response = true
    },
    methods: {
        async startup() {
          await this.getMyAccountType();
            await this.getOrderEA()
            await this.getTableEA()

        },
        async getTableEA() {
            let no = 1
            this.items = await Core.getHttp(`/api/ea/order/?user=${Auth.user.id}${this.filterProduct}${this.filterBroker}${this.filterAccountType}`)
            this.items =   _.map(this.items, (r) => {
                let obj = r
                obj.on = no++
                obj.pr = this.getProduct(obj.product)
                obj.product_image = this.$url+this.getProduct(obj.product).image
                obj.product_id = r.product
                obj.product = this.getProduct(obj.product).name
                obj.broker_image = this.$url+this.getBroker(obj.broker).image
                obj.broker_id = r.broker
                obj.broker = this.getBroker(obj.broker).name
                obj.act =  this.getAccountType(obj.account_type)
                obj.account_type = this.getAccountTypeList(obj.act.account_type) 
                obj.account_type_image = this.$url+this.getAccountTypeListImg(obj.act.account_type)
                obj.account_no = obj.act.account_no
                obj.price = obj.pr.price
              obj.remark = r.remark
                return obj
            })
        },
      async getMyAccountType(){
          this.myBrokerAccounts  = await Core.getHttp(`/api/finance/brokeraccount/?user=${this.user.id}`)
      },
        async getOrderEA() {
            this.products = await Core.getHttp(`/api/ea/product/`)
            this.listFilerProduct = _.map(this.products, (r) => {
                return {
                    id: `&product=` + r.id,
                    name: r.name,
                }
            })
            console.log(this.listFilerProduct);

            this.brokers = await Core.getHttp(`/api/finance/broker/`)
            this.listsFilterBroker = _.map(this.brokers, (r) => {
                return {
                    id: `&broker=` + r.id,
                    name: r.name,
                }
            })
             console.log(this.listFilerProduct);


            this.accountTypes = await Core.getHttp(`/api/finance/accounttype/`)
            this.listsFilterAccount = this.accountTypes
            this.listsFilterAccount = _.map(this.listsFilterAccount, (r) => {
                return {
                    id: `&account_type=` + r.id,
                    name: r.name,
                    broker:r.broker
                }
            })
             console.log(this.listsFilterAccount);
            
        },

        getProduct(id) {
            return _.find(this.products, {
                id: id
            })
        },
        getBroker(id) {
            return _.find(this.brokers, {
                id: id
            })
        },
        getAccountType(id) {
          console.log(id);
             return  _.find(this.myBrokerAccounts, {
                id: id
            })
          // console.log(types);
          //   return    _.find(this.listsFilterAccount, {
          //     id: types.account_type
          //   })
        },
      getAccountTypeList(id){
          return    _.find(this.accountTypes, {
            id: id
          }).name
      },

      getAccountTypeListImg(id){
          return    _.find(this.accountTypes, {
            id: id
          }).image
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
    }
}
</script>

<style>

</style>
