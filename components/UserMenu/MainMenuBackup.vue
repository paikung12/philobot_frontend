<template>
<div class="bg-main " v-if="response">

    <v-app-bar color="transparent" flat fixed absolute class="w-full">
        <div class="boxed-container w-full">
            <div class="d-flex align-center mx-6">
                <!-- Left Content -->
                <v-app-bar-nav-icon class="d-block d-lg-none me-2" @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>

                <v-spacer></v-spacer>

                <vs-button v-if="!kyc.user_verified" @click="$router.push('/account')" color="#FF0000" floating class="my-point">
                    <v-icon style="color:white;" class="mr-2">mdi-account-alert</v-icon> ยังไม่ได้ยืนยันตัวตน KYC
                </vs-button>
                <vs-button color="#4ade80" floating class="my-point">
                    <v-icon style="color:white;" class="mr-2">mdi-bitcoin</v-icon>
                    Point : {{$comma(point.current)}}
                </vs-button>
                <!-- <div>
                    <div class="flex  gap-3 items-center font-semibold text-gray-800 p-3 rounded-md hover:cursor-pointer ">
                        <vs-avatar history success class="hidden md:block sm:block xs:block">
                            <img v-if="!imageProfile" src="~/static/images/avatars/1.png">
                            <img v-else class="w-10 h-10 rounded-full" :src="$url+imageProfile" alt="Rebecca Burke">
                        </vs-avatar>
                        <div class="flex flex-col">
                            <div class="text-green-400 hidden md:block sm:block xs:block ">
                                {{user.display_name}}
                            </div>
                            <div class="text-gray-400 text-sm font-normal hidden md:block sm:block xs:block">
                                {{user.first_name}} {{user.last_name}}
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </v-app-bar>

    <v-navigation-drawer app floating width="260" class="app-navigation-menu bg-main shadow-2xl" :right="$vuetify.rtl" v-model="isDrawerOpen">
        <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
            <router-link to="/" class="d-flex align-center text-decoration-none w-full">
                <center>
                    <v-slide-x-transition>
                        <img class="h-14" src="https://www.img.in.th/images/90cc2f82b6c393cc69828ea5a21eacd1.png" alt="">
                    </v-slide-x-transition>
                </center>
            </router-link>
        </div>

        <div class="p-6 flex flex-col items-center">
         
            <vs-avatar class="shadow-xl" badge-position="top-right" :badge-color="tier.color"  size="150">
                <img v-if="user.image_profile" :src="$url+user.image_profile" alt=""> 
                <img v-else src="https://i.pinimg.com/originals/4a/6a/cb/4a6acb8ab84a58ca85ef817b02de7067.jpg"  alt="">
                <template #badge>
                    {{tier.name}}
                </template>
            </vs-avatar>

            <h2 v-if="user.display_name" class="text-2xl font-semibold mt-2">{{user.display_name}}</h2>
            <h2 v-else class="text-2xl font-semibold">{{user.first_name}}</h2>
            <h2>{{user.email}}</h2>
        </div>

        <v-list expand shaped class="  ">
            <UserMenu-NavbarLink path="/" title="Home" :icon="require('~/static/png/018-pantone.png')"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink v-if="kyc.user_verified" path="/transaction" title="Transaction" :icon="require('~/static/png/5260274.png')"></UserMenu-NavbarLink>
            <!-- <UserMenu-NavbarLink path="/partner" title="E-commerce" :icon="mdi-handshake-outline"></UserMenu-NavbarLink> -->
            <UserMenu-NavbarLink v-if="kyc.user_verified" path="/forex" title="Forex Broker" :icon="require('~/static/png/5180646.png')"></UserMenu-NavbarLink>
            <UserMenu-NavMenuSectionTitle title="Product"></UserMenu-NavMenuSectionTitle>
            <UserMenu-NavbarLink v-if="kyc.user_verified" path="/semiauto" title="EA" :icon="require('~/static/png/023-app-store.png')"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink v-if="kyc.user_verified" path="/signals" title="Indicator" :icon="require('~/static/png/speedometer.png')"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink v-if="kyc.user_verified" path="/copytrade" title=" Copy Trade" :icon="require('~/static/png/016-cp.png')"></UserMenu-NavbarLink>

            <UserMenu-NavMenuSectionTitle title="USER SETTING"></UserMenu-NavMenuSectionTitle>

            <UserMenu-NavbarLink path="/account" title="Account Setting" :icon="require('~/static/png/034-designthinking.png')"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink v-if="kyc.user_verified" path="/accountstatus" title="History Account" :icon="require('~/static/png/010-workinghours.png')"></UserMenu-NavbarLink>
        </v-list>

        <template v-slot:append>
            <div>
                <div @click="logout()">
                    <UserMenu-NavbarLink path="/logout" title="Logout" :icon="require('~/static/png/1828490.png')"></UserMenu-NavbarLink>
                </div>

            </div>
        </template>

    </v-navigation-drawer>

</div>
</template>

<script>
import {
    Auth
} from '@/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
export default {
    data() {
        return {
            isDrawerOpen: true,
            kyc: {},
            form: {},
            response: false,
        }
    },
    methods: {
        async logout() {
            await Auth.logout();
            await location.reload();
        },
        async getMyKyc() {
            let kyc = await Core.getHttp(`/api/account/kyc/?user=${this.user.id}`);
            if (kyc.length > 0) {
                this.kyc = kyc[kyc.length - 1];
            }
        },
        async initial() {
            this.form = await Core.getHttp(`/api/account/userprofile/${this.user.id}/`)
        },
    },
    computed: {
        user() {
            return Auth.user
        },
        point() {
            return Auth.point
        },
        tier() {
            return Auth.tier
        },
        imageProfile() {
            return Auth.user.image_profile
        },

    },
    async created() {
        await this.initial()
        await this.getMyKyc();
        this.response = true;
    }
}
</script>

<style>
.upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
