<template>
<div class="secondary " v-if="response">

    <div class="p-3 mt-4 lg:ml-64">
        <div class="flex">
            <div class=" w-5/6">
                <div class="flex w-full h-full">
                    <div class="w-11/12">
                        <v-slide-group show-arrows class="w-full ">
                            <v-slide-item v-for="n,index in 4" :key="index" style="width:350px;">
                                <div class=" ml-4 pb-5" v-if="test[index]">
                                    <div class="flex valhalla2 cursor-pointer  rounded-xl bg-white shadow-lg ">
                                        <img class="rounded-full w-20 h-20 m-2 mt-3" src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif" alt="">
                                        <div class="relative  space-y-1 p-4">
                                            <h4 class="text-lg text-green-500">Rebalance</h4>
                                            <div class="relative h-6 text-green-400 text-sm">
                                                <span class="transition duration-300 group-hover:invisible group-hover:opacity-0">UID: 12234123</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-col p-3 ">
                                            <v-chip class="m-1 " color="success" label><span class="text-sm p-2 text-white">connect</span></v-chip>
                                            <v-chip class="m-1 " color="success" label><span class="text-sm p-2 text-white">working</span></v-chip>
                                        </div>
                                    </div>
                                </div>
                                <div class=" ml-2" v-else>
                                    <div class="h-full  group relative flex  justify-between rounded-xl before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-amber-600 before:opacity-0 before:transition before:duration-500 ">

                                    </div>
                                </div>
                            </v-slide-item>
                        </v-slide-group>
                    </div>
                    <div class="w-1/12 flex flex-col pt-3">
                        <v-btn outlined x-small class="m-1" fab color="success">
                            <v-icon>mdi-plus </v-icon>
                        </v-btn>
                        <v-btn outlined x-small class="m-1" fab color="error">
                            <v-icon>mdi-minus </v-icon>
                        </v-btn>
                    </div>
                </div>

            </div>
            <div class="w-1/2 md:-ml-8 lg:-ml-16">
                <div class="flex flex-wrap  sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-1">
                    <div class=" ml-4 pb-5 flex ">
                        <div class="valhalla2 flex  cursor-pointer  rounded-xl bg-white shadow-lg ">
                            <div class="flex flex-row relative  space-y-1 p-3">
                                <div class="flex gap-2 p-4 ">
                                    <div class="pt-2 flex gap-2">
                                        <span class="flex items-center transition ease-out duration-300 hover:bg-green-500 hover:text-white bg-green-200 w-8 h-8 px-1 rounded-full text-blue-400 cursor-pointer">
                                        <v-btn @click="switchDark()" >1</v-btn>
                                        </span>
                                        <span class="flex items-center transition ease-out duration-300 hover:bg-green-500 hover:text-white bg-green-200 w-8 h-8 px-1 rounded-full text-blue-400 cursor-pointer">

                                        </span>
                                        <span class="flex items-center transition ease-out duration-300 hover:bg-green-500 hover:text-white bg-green-200 w-8 h-8 px-1 rounded-full text-blue-400 cursor-pointer">

                                        </span>
                                    </div>

                                    <v-chip class="ma-2" color="primary" label>
                                        <v-icon left>
                                            mdi-account-circle-outline
                                        </v-icon>
                                        Basics
                                    </v-chip>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <v-navigation-drawer clipped app floating width="260" class="valhalla app-navigation-menu    shadow-2xl " :right="$vuetify.rtl" v-model="isDrawerOpen">

        <div class="invisible md:visible  mt-4 ">
            <center>
                PHILOBOT
            </center>
        </div>

        <v-list expand shaped class="  ">
            <!-- <UserMenu-NavbarLink path="/" title="Home" :icon="require('~/static/png/018-pantone.png')"></UserMenu-NavbarLink> -->
            <UserMenu-NavbarLink path="/overview" title="Overview" :icon="require('~/static/png/2578759.png')"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/robottrade" title="Robot Trade"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/profittest" title="Profit Test"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/factory" title="Factory"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/refferaly" title="Refferral"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/consult" title="Consult"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/level" title="Level"></UserMenu-NavbarLink>
            <!-- <UserMenu-NavbarLink path="/setting" title="Setting"></UserMenu-NavbarLink> -->
            <UserMenu-NavbarLink path="/account" title="Account Setting"></UserMenu-NavbarLink>
            <UserMenu-NavMenuSectionTitle title="Get Help"></UserMenu-NavMenuSectionTitle>
            <UserMenu-NavbarLink path="/gethelp" title="Get Help"></UserMenu-NavbarLink>
            <div @click="logout()">
                <UserMenu-NavbarLink path="/logout" title="Logout" :icon="require('~/static/png/1828490.png')"></UserMenu-NavbarLink>
            </div>
        </v-list>

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
import {
    Web
} from '~/vuexes/web'
import {
    VueperSlides,
    VueperSlide
} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            test: [1, 2, 3, ],
            isDrawerOpen: true,
            kyc: {},
            form: {},
            response: false,
        }
    },
    methods: {
        async switchDark(){
              this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
        async logout() {
            let check = await Web.confirm(`Are you sure to logout.`)
            if (check) {
                await Auth.logout();
                await location.reload();
            } else {
                await this.$router.push(`/`)
            }

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
        async checkReward() {
            if (this.$route.path == '/') {
                await location.reload()
            } else {
                await this.$router.push('/')
            }
        }
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

.bg-navx {
    background-color: #00C0B1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%2300C0B1' width='11' height='11'/%3E%3Crect fill='%2316c1b0' x='10' width='11' height='11'/%3E%3Crect fill='%2323c2af' y='10' width='11' height='11'/%3E%3Crect fill='%232cc3af' x='20' width='11' height='11'/%3E%3Crect fill='%2334c4ae' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%233ac5ad' y='20' width='11' height='11'/%3E%3Crect fill='%2341c6ad' x='30' width='11' height='11'/%3E%3Crect fill='%2346c6ac' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%234cc7ab' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2351c8ab' y='30' width='11' height='11'/%3E%3Crect fill='%2355c9aa' x='40' width='11' height='11'/%3E%3Crect fill='%235acaaa' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%235ecba9' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2363cca9' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2367cca8' y='40' width='11' height='11'/%3E%3Crect fill='%236bcda8' x='50' width='11' height='11'/%3E%3Crect fill='%236fcea8' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2373cfa7' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2376d0a7' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%237ad1a7' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%237ed1a6' y='50' width='11' height='11'/%3E%3Crect fill='%2381d2a6' x='60' width='11' height='11'/%3E%3Crect fill='%2385d3a6' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%2388d4a6' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%238bd5a6' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%238fd5a6' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%2392d6a6' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%2395d7a6' x='70' width='11' height='11'/%3E%3Crect fill='%2399d8a6' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%239cd8a6' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%239fd9a6' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23a2daa6' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23a5dba6' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23a8dba6' x='80' width='11' height='11'/%3E%3Crect fill='%23abdca7' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23aedda7' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23b1dea7' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23b4dea8' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23b7dfa8' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23bae0a9' x='90' width='11' height='11'/%3E%3Crect fill='%23bde0a9' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23c0e1aa' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23c2e2ab' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23c5e3ab' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23c8e3ac' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23cbe4ad' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23cde5ad' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d0e5ae' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23d3e6af' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23d5e7b0' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23d8e8b1' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23dae8b2' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23dde9b3' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23e0eab4' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23e2eab5' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23e4ebb6' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23e7ecb7' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23e9edb9' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23ecedba' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

.bguui {

    background-color: #FFFFFF;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23EEFEFF'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f7ffff'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(880 0)'%3E%3Cg transform='translate(0 1500)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-212.4 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;

}
</style>
