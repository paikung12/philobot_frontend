<template>
<div class="p-4" v-if="response">
    <div class="p-8 "><span class="text-6xl"></span>
          <v-data-table :search="search" :headers="headers" :items="items" class="elevation-1">
            <template v-slot:item.product_id="{ item }">
                <div class="flex">
                    <img class="h-6" :src="item.Requesttest_image" alt=""> <span class="ml-2">{{item.product}}</span>
                </div>
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
        historyaccountindicator: [],
        no: 1,
        search: '',
        items: [],
        response: false,
        products: [],
        filterRequesttest:[],
        headers: [{
                text: 'No.',
                value: "no",
            },
            {
                text: 'Order Request Test',
                value: "product_id",
            },
            {
                text: 'Date Create',
                value: "created_at",
            },
        ]

    }),
    async created() {
        await this.startup(),
            this.response = true

    },
    methods: {
        async startup() {
               await this.getRequesttests()
            await this.getRequesttestEA()
        },
        async getRequesttestEA() {
            let no = 1
            this.items = await Core.getHttp(`/api/ea/requesttest/?user=${Auth.user.id}${this.filterRequesttest}`)
            this.items = _.map(this.items, (r) => {
                let obj = r
                obj.no = no++
                obj.Requesttest_image = this.$url+this.getRequesttest(obj.product).image
                obj.product_id = r.product
                obj.product = this.getRequesttest(obj.product).name
              
                return obj
            })
            console.log('mapData',this.items)

        },
        async getRequesttests() {
            this.products = await Core.getHttp(`/api/ea/product/`)
            this.listRequesttest = _.map(this.Requesttests , (r) =>{
                return { 
                    id: `&product=` + r.id,
                    name: r.name 
                }
            }),
             this.listRequesttest.push({
                id: ``,
                name: 'All'
            })
             console.log(this.listRequesttest);
        },
        getRequesttest(id) {
            return _.find(this.products, {
                id: id 
            })
        },
        async getFilter() {
            await this.getRequesttestEA()
        },
    },
    computed: {

    },
    watch: {
        async page(oldVal, newVal) {
            await this.startup();
        }
    }
}
</script>

<style>

</style>
