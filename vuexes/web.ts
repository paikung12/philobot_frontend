import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import axios from '@/plugins/axios'
import _ from "lodash"
import moment from 'moment'
import Swal from 'sweetalert2'
import Vue from 'vue';

@Module({ generateMutationSetters: true })
class WebModule extends VuexModule {
  public loading: boolean = false;
  public loadTxt: any = 'Loading..'

  public snackTxt: any = ''
  public snacking: boolean = false;
  public snackColor: any = 'success';
  public vs:any = null;
  
  public async setVuesax(vs:any){
    this.vs = vs
  }
  public async noti(color:string = 'success',title:string = 'Notification',text:string = "Notification Detail") {
    this.vs.notification({
      color,
      title: title,
      text: text
    })

  }

  public async onSnack(txt: string, color: string = 'success') {
    await this.offSnack()
    this.snacking = true
    this.snackTxt = txt
    this.snackColor = color
  }
  public async offSnack() {
    this.snacking = false
  }


  public async switchLoad(load: boolean) {
    //  this.loadTxt = 'กำลังโหลด'
    this.loading = load
  }

  public async onLoad(txt: string) {
    this.loadTxt = txt
    this.loading = true
  }

  public async offLoad() {
    this.loading = false
  }

  public async alert(title: any = 'OK', type: any = 'success', text: any = '') {
    await Swal.fire({
      icon: type,
      title: title,
      text: text,
      confirmButtonText: `OK`,
      confirmButtonColor: "#00E96A",
    })
  }

  public async alertAuto(title: any = 'OK', timer: any = 2000, type: any = 'success', text: any = '') {
    await Swal.fire({
      showConfirmButton: false,
      icon: type,
      title: title,
      text: text,
      timer: timer,

    })
  }
  public async alertnotfound(title: any = 'OK', type: any = 'error', text: any = '') {
    await Swal.fire({
      icon: type,
      title: title,
      text: text,
      confirmButtonText: `OK`,
      confirmButtonColor: "#ef4444",
    })
  }
  public async alerterror(title: any = 'Please click the link from the email again.', type: any = 'error', text: any = '') {
    await Swal.fire({
      icon: type,
      title: title,
      text: text,
      confirmButtonText: `OK`,
      confirmButtonColor: "#ef4444",
    })
  }

  public async confirm(title: any = 'Are you sure ?') {
    let check = await Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: `OK`,
      cancelButtonText: `Cancel`,
      confirmButtonColor: "#00E96A",
    }).then((result) => {
      return result.isConfirmed
    })
    return check
  }





}

import store from "@/vuexes"
export const Web = new WebModule({ store, name: "Web" })
