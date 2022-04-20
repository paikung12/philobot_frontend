import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class ProductModule extends VuexModule{

    public async getEAProduct(is_active:boolean = true){
         return await Core.getHttp('/api/ea/product/?is_active='+is_active)
    }
    public async getIndicatorProduct(is_active:boolean = true){
        return await Core.getHttp('/api/indicator/product/?is_active='+is_active)
   }
   public async getCopytradeProduct(is_active:boolean = true){
        return await Core.getHttp('/api/copytrade/product/?is_active='+is_active)
}
     public async getReqursttest(){
          return await Core.getHttp('/api/ea/requesttest/')
     }
  

}
import store from "@/vuexes"
export const Product = new ProductModule({store, name: "Product"})