import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class CashOutModule extends VuexModule{

   public async postCashout(params:any){
       return await Core.postHttpAlert('api/cash/cashout/', params)
   }

}
import store from "@/vuexes"
export const CashOut= new CashOutModule({store, name: "CashOut"})