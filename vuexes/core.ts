import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import axios from '@/plugins/axios'
import _ from "lodash"

import { Web } from './web'


@Module({ generateMutationSetters: true })
class CoreModule extends VuexModule {

  private token: string | null = null;

  public url: any = axios.defaults.baseURL


  async getHttp(url: string): Promise<any> {
    return await axios.get(url).then((r) => { return r.data }).catch((e) => { return e.response.data })
  }
  async postHttpAlert(url: string, form: object): Promise<any> {
    return await axios.post(url, form).then((r) => {
      Web.alert('Successfully Saved')
      return r.data
    }).catch((e) => {
      Web.alerterror('Failed to save data', 'error')
      console.log(e)
      return e.response.data
    })

  }
  async postHttpAlertAccount(url: string, form: object): Promise<any> {
    return await axios.post(url, form).then((r) => {
      Web.alert('Successfully Saved')
      return r.data
    }).catch((e) => {
      Web.alert('Can not : save due to the same Account Number in the system', 'error')
      console.log(e)
      return e.response.data
    })

  }
  async postHttp(url: string, form: object): Promise<any> {
    return await axios.post(url, form).then((r) => { return r.data }).catch((e) => {

      return e.response.data
    })
  }
  async putHttp(url: string, form: object): Promise<any> {
    return await axios.put(url, form).then((r) => { return r.data }).catch((e) => { return e.response.data })
  }
  async putHttpAlert(url: string, form: object): Promise<any> {
    let check = await Web.confirm("Do you want to continue? ")
    if (check) {
      return await axios.put(url, form).then((r) => {
        Web.alert('Successfully executed')
        return r.data
      }).catch((e) => {
        Web.alert('Failed to complete ', 'error')
        return e.response.data
      })
    }
  }
  async deleteHttp(url: string): Promise<any> {
    return await axios.delete(url).then((r) => { return r.data }).catch((e) => { return e.response.data })
  }

  async deleteHttpAlert(url: string): Promise<any> {
    let check = await Web.confirm("Are ")
    if (check) {
      return await axios.delete(url).then((r) => {
        Web.alert('Successfully deleted')
        return true
      }).catch((e) => {
        Web.alert('Failed to delete data', 'error')
        return false
      })
    }
  }


  async putImageHttpAlert(url: string, form: any): Promise<any> {
    let check = await Web.confirm("Are you sure you want to edit the information?")
    if (check) {
      return await axios.put(url, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((r) => {
        Web.alert('Successfully executed')
        return r.data
      }).catch((e) => {
        Web.alert('Failed to edit data', 'error')
        return e.response.data
      })
    }
  }

  public fillData(arr: any, key: string, val: any) {
    return _.find(arr, (r) => { return r[key] == val })
  }

  convertDate(date: any) {
    return moment(date).format('DD/MM/YYYY');
  }

  async getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  async setWaterMark(file: any) {
    const watermark = require('watermarkjs');
    return watermark([file,await this.dataURLtoFile(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAIAAADJDItPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAUSURBVChTY/iPF4xKYwV4pf//BwD7UkjGd/FzOQAAAABJRU5ErkJggg==`)])
      .image(watermark.image.center(0.5))
      .then((img: any) => {
        return img
      });  
  }
  async dataURLtoFile(dataurl: any) {
    let moment = require('moment')
    let date = moment();
    let extension = dataurl.substring("data:image/".length, dataurl.indexOf(";base64"))
    let filename = `${date.format('ddDDmmyyhhmmss')}.${extension}`
    console.log(filename);
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  async fileToBase64(file: any, callback: any,) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  }

  async getChoice(name: string) {
    return await this.getHttp(`/api/webconfig/choice/?is_active=true&type__name=${name}`)
  }


}

import store from "@/vuexes"
import moment from "moment";
export const Core = new CoreModule({ store, name: "Core" })
