<template>
<div class="p-4" v-if="response">
    <div class="p-8 "><span class="text-6xl"></span>
          <v-data-table :search="search" :headers="headers" :items="items" class="elevation-1">
            <template v-slot:item.product="{ item }">
                <div class="flex">
                    <img class="h-6" :src="item.product_image" alt=""> <span class="ml-2">{{item.product}}</span>
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
        listProduct: [],
        filterProduct: '',
        headers: [{
                text: 'No.',
                value: "no",

            },
            {
                text: 'Order Product',
                value: "product",

            },
            {
                text: 'Date Create',
                value: "created_at",

            },
        ],

    }),
    async created() {
        await this.startup()
        this.response = true

    },
    methods: {
        async startup() {
            await this.getProducts()
            await this.getTableIndicator()
        },
        async getTableIndicator() {
            let no = 1
            this.items = await Core.getHttp(`/api/indicator/order/?user=${Auth.user.id}${this.filterProduct}`)
            this.items = _.map(this.items, (r) => {
                let obj = r
                obj.no = no++
                obj.product_image = this.$url+this.getProduct(r.product).image
                obj.product_id = r.product
                 obj.product = this.getProduct(obj.product).name
                return obj
            })

        },
        async getProducts() {
            this.products = await Core.getHttp(`/api/indicator/product/`)
            this.listProduct = _.map(this.products, (r) => {
                return {
                    id: `&product=` + r.id,
                    name: r.name
                }
            })
            this.listProduct.push({
                id: ``,
                name: 'All'
            })
            console.log(this.listsFilterBroker);
        },
        getProduct(id) {
            return _.find(this.products, {
                id: id
            })
        },
        async getFilter() {
            await this.getTableIndicator()
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
