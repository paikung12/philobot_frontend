import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class HistoryAccountModule extends VuexModule{

    public async getEA(){
         return await Core.getHttp('/api/ea/order/')
    }
    public async getRquestTestEA(){
        return await Core.getHttp('/api/ea/requesttest/')
    }
    public async getIndicator (){
        return await Core.getHttp('/api/indicator/order/')
   }

}
import store from "@/vuexes"
export const HistoryAccount = new HistoryAccountModule({store, name: "HistoryAccount"})