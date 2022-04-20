import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import _ from "lodash"
import { Core } from '@/vuexes/core'
import { Web } from '@/vuexes/web'
import axios from '@/plugins/axios'
@Module({ generateMutationSetters: true })
class AuthModule extends VuexModule {
  private token: any = localStorage.getItem('token')
  public user: any = null
  public kyc: any = {}
  public point: any = {}
  public tier: any = {}
  public tiers: any = []
  public setting: any = []

  public async setUser() {
    let initData = await Core.getHttp(`/api/auth/v2/initprofile/`)
    this.user = (initData.user_profile)?initData.user_profile:null
    this.kyc = (initData.kyc)?initData.kyc:null
    this.point = (initData.point_use)?initData.point_use:null
    this.tier = (initData.mytier)?initData.mytier:null
    this.setting =(initData.setting)?initData.setting:null

    if (this.user.id) { 
      await this.checkTier(); 
    }

    return this.user
  }

  // async getMyKyc() {
  //   let kyc = await Core.getHttp(`/api/account/kyc/?user=${this.user.id}`);
  //   if (kyc.length > 0) {
  //     this.kyc = kyc[kyc.length - 1];
  //   }
  // }

  // async getSetting() {
  //   let setting = await Core.getHttp(`/api/webconfig/setting/`)
  //   if (setting.length > 0) {
  //     this.setting = JSON.parse(setting[setting.length - 1].value)
  //   }
  // }

  // async getMypoint() { 
  //   let point = await Core.getHttp(`/api/account/userpoint/?user=${this.user.id}`);
  //   if (point.length > 0) {
  //     this.point = point[point.length - 1];
  //     console.log('[DDDDDD]',this.point);
  //   }
  // }

  // async getMyTier() {
  //   alert(this.point.tier);
  //   this.tier = await Core.getHttp(`/api/account/tier/${this.point.tier}/`);
  //   console.log('[DDDDDDXXXX]',this.tier);
  // }


  private async checkTier() {
    let listTier = await Core.getHttp(`/api/account/tier/`)
    this.tiers = listTier
    let tier = await _.filter(listTier, (r) => {
      return this.point.total >= r.length
    }) 
    let currentTier: any = (tier.length > 0) ? tier[tier.length - 1] : this.tier
    if (this.tier.id == currentTier.id) {
      // alert("Point not update")
    } else {
      await this.updateMyTier(currentTier);
    }
  }


  private async updateMyTier(currentTier: any) {
    let tier = await Core.putHttp(`/api/account/userpoint/${this.point.id}/`, { tier: currentTier.id })
    await this.setUser();
    await Web.alert(`Your Point Update to ${currentTier.name}`)
    location.reload()
  }


  public async getUser() {
    let user = await Core.getHttp(`/api/auth/v2/profile/`)
    return user;
  }

  public async login(form: any) {
    await this.reToken();
    let user = await Core.postHttp(`/api/auth/v1/login/`, form)
    return user
  }

  public async register(form: any) {
    await this.reToken();
    let user = await Core.postHttp(`/api/auth/v2/register/`, form)
    return user
  }

  public async logPoint(received_from: string, point: string, types: number, status: number = 0) {
    let form = {
      "received_from": received_from,
      "point": point,
      "type": types,
      "status": status,
      "user": this.user.id
    }
    let out = await Core.postHttp(`/api/account/userpointhistory/`, form)
    if (out.id) {

    }
  }

  public async cutPoint(point: number) {
    let form = this.point
    form.current = form.current - point
    await Core.putHttp(`/api/account/userpoint/${this.point.id}/`, form)
  }

  public async addPoint(point: number) {
    let form = this.point
    form.current = form.current + point
    form.total = form.total + point
    await Core.putHttp(`/api/account/userpoint/${form.id}/`, form)
  }


  public async addPointWithoutTotal(point: number) {
    let form = this.point
    form.current = form.current + point
    await Core.putHttp(`/api/account/userpoint/${form.id}/`, form)
  }


  public async reToken() {
    axios.defaults.headers.common['Authorization'] = '';
  }

  public async storeToken(token: any) {
    console.log(token);
    axios.defaults.headers.common['Authorization'] = (token != null) ? `Token ${token}` : '';
  }

  public async storeTokenToStorage(token: any) {
    localStorage.setItem('token', token)
  }

  public async checkToken() {
    if (this.token != null) {
      await this.storeToken(this.token);
    }
  }

  public async checkUser() {
    let user = await this.getUser();
    if (this.token) {
      if (!user.id) {
        alert('Session หมดอายุ')
        await this.reToken();
        await this.logout();
        location.reload();
      }
    }

    // if(!this.user.id){
    //   await window.location.replace("/auth/login");
    // }
  }


  public async logout() {
    localStorage.clear();
    return await Core.postHttp('/auth/logout/', {})
  }




}

import store from "@/vuexes"
export const Auth = new AuthModule({ store, name: "Auth" })
