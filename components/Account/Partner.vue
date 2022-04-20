<template>
<div class="m-16">

    <div v-if="kyc.user_verified">
        <div v-if="!kyc.refferal_code">
            <v-alert outlined type="info">
                <h2>You not have refferal code please click to create your refferal code for your partner use. </h2>
                <br>
                <vs-button floating @click="createRefCode()">Create My Refferal Code</vs-button>
            </v-alert>
        </div>
        <div v-else>
            <v-alert outlined type="success">
                <div class="flex">
                    <div>
                        My Referal Code
                        <h2 class="text-3xl">{{kyc.refferal_code}}</h2>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn text small @click="copyURL(kyc.refferal_code)" color="primary">
                        <v-icon>mdi-clipboard</v-icon> Copy Referal Code
                    </v-btn>
                </div>

            </v-alert>
        </div>
    </div><br>

    <div class="flex flex-wrap overflow-hidden lg:-mx-1 xl:-mx-1">

        <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1">
            <h2 class="font-semibold">My Partners</h2>
            <v-timeline dense>
                <v-timeline-item v-for="(partner, i) in partners" :key="i" small>

                    <div class="flex flex-col md:flex-row">
                        <vs-avatar circle v-if="$url+partner.image_profile">
                            <img :src="$url+partner.image_profile" alt="">
                        </vs-avatar>
                        <vs-avatar primary v-else>
                            <template #text>
                                {{partner.first_name}}
                            </template>
                        </vs-avatar>
                        <div class="ml-2 flex flex-col">
                            <span class="font-semibold text-green-400"> {{partner.first_name}} {{partner.last_name}}</span>
                            <span class="text-sm">{{partner.email}}</span>
                        </div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>
        <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1">
            <h2 class="font-semibold">My Master</h2>
            <v-timeline dense>
                <v-timeline-item v-for="(master, i) in masters" :key="i" small>
                    <div class="flex flex-col md:flex-row">
                        <vs-avatar circle v-if="$url+master.kyc_image">
                            <img :src="$url+master.kyc_image" alt="">
                        </vs-avatar>
                        <vs-avatar primary v-else>
                            <template #text>
                                {{master.kyc_first_name}}
                            </template>
                        </vs-avatar>
                        <div class="ml-2 flex flex-col">
                            <span class="font-semibold text-green-400"> {{master.kyc_first_name}} {{master.kyc_last_name}}</span>
                            <span class="text-sm">{{master.kyc_email}}</span>
                        </div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>
    </div>
</div>
</template>

<script>
import {
    Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
    Auth
} from '@/vuexes/auth'
import {
    Web
} from '~/vuexes/web'
export default {
    data: () => ({
        refferals: {},
        refferalcode: {},
        partners: [],
        masters: [],
        kyc: Auth.kyc,
        user: Auth.user
    }),
    async created() {
        await this.startup()
    },
    methods: {
        async startup() {
            await this.getOrderReferral()
            await this.getMasterReferral()
        },
        async getOrderReferral() {
            this.partners = await Core.getHttp(`/api/account/clientview/?other_referral_code=${this.kyc.refferal_code}&is_active=true`)
        },
        async getMasterReferral() {
            this.masters = await Core.getHttp(`/api/account/checkclientview/?refferal_code=${this.user.other_referral_code}&user__is_active=true`)
        },
        async copyURL(mytext) {
            try {
                await navigator.clipboard.writeText(`${this.$furl}auth/register?ref=${mytext}`); 
                await Web.noti(`success`,'Copy Success','Your refferal code is copied')

            } catch (e) {
                await Web.alertAuto(`Your refferal code is not copied`, 1000, 'error')
            }
        },
        async createRefCode() {
            let refcode = new moment().format('MMmmDDssYYYhh')
            let create = await Core.putHttp(`/api/account/kyc/${this.kyc.id}/`, {
                refferal_code: refcode
            })
            await this.initial();
        },
    },
    computed: {
        imageProfile() {
            return Auth.user.image_profile
        },
        point: () => {
            return Auth.point
        },
        tier: () => {
            return Auth.tier
        },
        tiers: () => {
            return Auth.tiers
        },
        setting: () => {
            return Auth.setting
        },
    },

}
</script>

<style>

</style>
