import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import axios from '@/plugins/axios'
import { Core } from "@/vuexes/core";

import _ from 'lodash'
@Module({ generateMutationSetters: true })
class CityClass extends VuexModule {

    public dialogCityState: boolean = false;

    public currentGeo: any | null = null
    public currentProvince: any | null = null
    public currentAmphur: any | null = null
    public currentDistrict: any | null = null
    public showName: string | null = null

    public city: any = {}

    public async getGeo(): Promise<any> {
        return await Core.getHttp('/api/location/geography/')
    }

    public async getProvince(geo: any): Promise<any> {
        return await Core.getHttp(`/api/location/province/?geo=${geo}`)
    }

    public async getAmphur(province: any): Promise<any> {
        return await Core.getHttp(`/api/location/amphur/?province=${province}`)
    }

    public async getDistrict(amphur: any): Promise<any> {
        return await Core.getHttp(`/api/location/district/?amphur=${amphur}`)
    }

    public async setShowName() {
        let province: any = this.currentProvince ? this.currentProvince.name : "-"
        let geo: any = this.currentGeo ? this.currentGeo.name : "-"
        let amphur: any = this.currentAmphur ? this.currentAmphur.name : "-"
        let district: any = this.currentDistrict ? this.currentDistrict.name : "-"
        this.showName = `${(geo)?geo:'No Address City'}  ${(province)?`จ.`+province:''} ${(amphur)?'อ.'+amphur:''}  ${(district)?'ต.'+district:''}`
    }

    public async getFullCity() {
        this.city = {
            'geo': await Core.getHttp('/api/location/geography/'),
            'province': await Core.getHttp(`/api/location/province/`),
            'amphur': await Core.getHttp(`/api/location/province/`),
            'district': await Core.getHttp(`/api/location/district/`)
        }
    }




}

import store from "@/vuexes"

export const City = new CityClass({ store, name: "City" })
