import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class StoreModule extends VuexModule{

    public async getStoreProduct(is_active:boolean = true){
        return await Core.getHttp('/api/store/product/?is_active='+is_active)
    }
    
}
import store from "@/vuexes"
export const Store = new StoreModule({store, name: "Store"})