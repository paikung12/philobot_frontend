<template>
<div>
    <Core-BgIndex></Core-BgIndex>

    <section class="relative m-6 mt-20"> 
        <div class="p-3">
            <Dashboard-Slide></Dashboard-Slide>
        </div>
        <div class="flex flex-col md:flex-row md:h-60 mt-4">
            <div class="w-full md:w-1/2 p-4 sm:p-6 lg:p-0 bg-white ">
                <Core-TierCard ></Core-TierCard>
            </div>
            <div class="w-full md:w-1/2 p-3">
                <div class="w-full h-1/2">
                    <div class="max-w-3xl w-full mx-auto z-10">
                        <div class="flex flex-col">
                            <Cashout-Form></Cashout-Form>

                           
                        </div>
                    </div>
                </div>
                <div class="pt-3 w-full h-1/2">
                    <div class="max-w-3xl w-full mt-1 mx-auto z-10">
                        <div class="flex flex-col">
                            <div class="bg-sky-400  border-white shadow-lg  rounded-3xl p-4 ">
                                <div class="flex-none sm:flex">
                                    <div class="flex-auto sm:ml-5 justify-evenly">
                                        <div class="flex items-center justify-between sm:mt-2">
                                            <div class="flex items-center">
                                                <div class="flex flex-col">
                                                    <div class="w-full flex-none text-lg text-white font-bold leading-none">
                                                        <v-icon class="mr-2" size="20">em em-trophy</v-icon>
                                                        Reward
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row items-center justify-end">
                                            <div class="flex-auto text-white my-1">
                                                <span class="mr-3 ">customers can bring Points can be exchanged for rewards.</span>
                                            </div>
                                            <v-btn @click="$router.push(`/redeem`)" rounded fab>
                                                <v-icon>mdi-arrow-right</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-36 md:block">
            <div class="md: mt-14">
                <Reward-Main></Reward-Main>
            </div>

        </div>
    </section>
</div>
</template>

<script>
import {
    Web
} from "~/vuexes/web";
import {
    Auth
} from "~/vuexes/auth";
export default {
    components: {},

    data: () => {
        return {
            tab: null,
            items: [
                "Popular",
                "Electronics",
                "Beauty",
                "Travel",
                "Fashion",
                "Delivery",
                "Foods",
                "Sport",
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            active: false,
            input1: '',
            input2: '',
            checkbox1: false,
        };
    },
    async created() {
        await this.startup()
    },
    methods: {
        async startup() {
            if (!this.kyc.user_verified) {
                await Web.alert(`Please Confirm Your KYC`, 'info')
                await this.$router.push(`/account`)
            }
        },
        async reloadCashOut(val) {
            this.active = false
        }
    },
    computed: {
        user() {
            return Auth.user
        },
        kyc() {
            return Auth.kyc
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
};
</script>

<style>
.bgxs {
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(39, 224, 145, 1) 100%);
}

.bg-cash {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23FFAC20'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

.bgh {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1008%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 183%2c 74%2c 1)'%3e%3c/rect%3e%3cpath d='M211.32 271.74L276.27 309.24L276.27 384.24L211.32 421.74L146.37 384.24L146.37 309.24zM276.27 159.24L341.23 196.74L341.23 271.74L276.27 309.24L211.32 271.74L211.32 196.74zM471.14 271.74L536.09 309.24L536.09 384.24L471.14 421.74L406.18 384.24L406.18 309.24zM471.14 496.74L536.09 534.24L536.09 609.24L471.14 646.74L406.18 609.24L406.18 534.24zM536.09 -65.76L601.04 -28.26L601.04 46.74L536.09 84.24L471.14 46.74L471.14 -28.26zM730.95 46.74L795.91 84.24L795.91 159.24L730.95 196.74L666 159.24L666 84.24zM666 384.24L730.95 421.74L730.95 496.74L666 534.24L601.04 496.74L601.04 421.74zM990.77 271.74L1055.72 309.24L1055.72 384.24L990.77 421.74L925.81 384.24L925.81 309.24zM990.77 496.74L1055.72 534.24L1055.72 609.24L990.77 646.74L925.81 609.24L925.81 534.24zM1120.67 46.74L1185.63 84.24L1185.63 159.24L1120.67 196.74L1055.72 159.24L1055.72 84.24zM1120.67 496.74L1185.63 534.24L1185.63 609.24L1120.67 646.74L1055.72 609.24L1055.72 534.24zM1315.54 159.24L1380.49 196.74L1380.49 271.74L1315.54 309.24L1250.58 271.74L1250.58 196.74zM1510.4 271.74L1575.35 309.24L1575.35 384.24L1510.4 421.74L1445.44 384.24L1445.44 309.24z' stroke='rgba(255%2c 255%2c 255%2c 0.55)' stroke-width='2'%3e%3c/path%3e%3cpath d='M203.82 271.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM268.77 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM268.77 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM203.82 421.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM138.87 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM138.87 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM268.77 159.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM333.73 196.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM333.73 271.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM203.82 196.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM463.64 271.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM528.59 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM528.59 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM463.64 421.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM398.68 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM398.68 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM463.64 496.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM528.59 534.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM528.59 609.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM463.64 646.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM398.68 609.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM398.68 534.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM528.59 -65.76 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM593.54 -28.26 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM593.54 46.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM528.59 84.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM463.64 46.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM463.64 -28.26 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM723.45 46.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM788.41 84.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM788.41 159.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM723.45 196.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM658.5 159.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM658.5 84.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM658.5 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM723.45 421.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM723.45 496.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM658.5 534.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM593.54 496.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM593.54 421.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM983.27 271.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1048.22 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1048.22 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM983.27 421.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM918.31 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM918.31 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM983.27 496.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1048.22 534.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1048.22 609.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM983.27 646.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM918.31 609.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM918.31 534.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1113.17 46.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1178.13 84.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1178.13 159.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1113.17 196.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1048.22 159.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1048.22 84.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1113.17 496.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1178.13 534.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1178.13 609.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1113.17 646.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1308.04 159.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1372.99 196.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1372.99 271.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1308.04 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1243.08 271.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1243.08 196.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1502.9 271.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1567.85 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1567.85 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1502.9 421.74 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1437.94 384.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1437.94 309.24 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0z' fill='rgba(255%2c 255%2c 255%2c 0.55)'%3e%3c/path%3e%3cpath d='M46.67 220.4L89.98 245.4L89.98 295.4L46.67 320.4L3.37 295.4L3.37 245.4zM46.67 520.4L89.98 545.4L89.98 595.4L46.67 620.4L3.37 595.4L3.37 545.4zM133.28 70.4L176.58 95.4L176.58 145.4L133.28 170.4L89.98 145.4L89.98 95.4zM133.28 370.4L176.58 395.4L176.58 445.4L133.28 470.4L89.98 445.4L89.98 395.4zM176.58 145.4L219.88 170.4L219.88 220.4L176.58 245.4L133.28 220.4L133.28 170.4zM219.88 370.4L263.19 395.4L263.19 445.4L219.88 470.4L176.58 445.4L176.58 395.4zM176.58 445.4L219.88 470.4L219.88 520.4L176.58 545.4L133.28 520.4L133.28 470.4zM219.88 520.4L263.19 545.4L263.19 595.4L219.88 620.4L176.58 595.4L176.58 545.4zM263.19 -4.6L306.49 20.4L306.49 70.4L263.19 95.4L219.88 70.4L219.88 20.4zM263.19 445.4L306.49 470.4L306.49 520.4L263.19 545.4L219.88 520.4L219.88 470.4zM306.49 520.4L349.79 545.4L349.79 595.4L306.49 620.4L263.19 595.4L263.19 545.4zM349.79 -4.6L393.09 20.4L393.09 70.4L349.79 95.4L306.49 70.4L306.49 20.4zM393.09 70.4L436.4 95.4L436.4 145.4L393.09 170.4L349.79 145.4L349.79 95.4zM436.4 -4.6L479.7 20.4L479.7 70.4L436.4 95.4L393.09 70.4L393.09 20.4zM479.7 520.4L523 545.4L523 595.4L479.7 620.4L436.4 595.4L436.4 545.4zM523 -4.6L566.3 20.4L566.3 70.4L523 95.4L479.7 70.4L479.7 20.4zM566.3 370.4L609.61 395.4L609.61 445.4L566.3 470.4L523 445.4L523 395.4zM609.61 145.4L652.91 170.4L652.91 220.4L609.61 245.4L566.3 220.4L566.3 170.4zM609.61 445.4L652.91 470.4L652.91 520.4L609.61 545.4L566.3 520.4L566.3 470.4zM696.21 295.4L739.51 320.4L739.51 370.4L696.21 395.4L652.91 370.4L652.91 320.4zM696.21 445.4L739.51 470.4L739.51 520.4L696.21 545.4L652.91 520.4L652.91 470.4zM739.51 520.4L782.82 545.4L782.82 595.4L739.51 620.4L696.21 595.4L696.21 545.4zM826.12 70.4L869.42 95.4L869.42 145.4L826.12 170.4L782.82 145.4L782.82 95.4zM826.12 220.4L869.42 245.4L869.42 295.4L826.12 320.4L782.82 295.4L782.82 245.4zM782.82 445.4L826.12 470.4L826.12 520.4L782.82 545.4L739.51 520.4L739.51 470.4zM869.42 145.4L912.72 170.4L912.72 220.4L869.42 245.4L826.12 220.4L826.12 170.4zM912.72 220.4L956.03 245.4L956.03 295.4L912.72 320.4L869.42 295.4L869.42 245.4zM869.42 295.4L912.72 320.4L912.72 370.4L869.42 395.4L826.12 370.4L826.12 320.4zM869.42 445.4L912.72 470.4L912.72 520.4L869.42 545.4L826.12 520.4L826.12 470.4zM912.72 520.4L956.03 545.4L956.03 595.4L912.72 620.4L869.42 595.4L869.42 545.4zM956.03 145.4L999.33 170.4L999.33 220.4L956.03 245.4L912.72 220.4L912.72 170.4zM999.33 520.4L1042.63 545.4L1042.63 595.4L999.33 620.4L956.03 595.4L956.03 545.4zM1042.63 -4.6L1085.93 20.4L1085.93 70.4L1042.63 95.4L999.33 70.4L999.33 20.4zM1085.93 70.4L1129.23 95.4L1129.23 145.4L1085.93 170.4L1042.63 145.4L1042.63 95.4zM1042.63 295.4L1085.93 320.4L1085.93 370.4L1042.63 395.4L999.33 370.4L999.33 320.4zM1042.63 445.4L1085.93 470.4L1085.93 520.4L1042.63 545.4L999.33 520.4L999.33 470.4zM1129.23 -4.6L1172.54 20.4L1172.54 70.4L1129.23 95.4L1085.93 70.4L1085.93 20.4zM1129.23 145.4L1172.54 170.4L1172.54 220.4L1129.23 245.4L1085.93 220.4L1085.93 170.4zM1172.54 370.4L1215.84 395.4L1215.84 445.4L1172.54 470.4L1129.23 445.4L1129.23 395.4zM1172.54 520.4L1215.84 545.4L1215.84 595.4L1172.54 620.4L1129.23 595.4L1129.23 545.4zM1215.84 145.4L1259.14 170.4L1259.14 220.4L1215.84 245.4L1172.54 220.4L1172.54 170.4zM1215.84 295.4L1259.14 320.4L1259.14 370.4L1215.84 395.4L1172.54 370.4L1172.54 320.4zM1259.14 370.4L1302.44 395.4L1302.44 445.4L1259.14 470.4L1215.84 445.4L1215.84 395.4zM1215.84 445.4L1259.14 470.4L1259.14 520.4L1215.84 545.4L1172.54 520.4L1172.54 470.4zM1259.14 520.4L1302.44 545.4L1302.44 595.4L1259.14 620.4L1215.84 595.4L1215.84 545.4zM1302.44 -4.6L1345.75 20.4L1345.75 70.4L1302.44 95.4L1259.14 70.4L1259.14 20.4zM1345.75 70.4L1389.05 95.4L1389.05 145.4L1345.75 170.4L1302.44 145.4L1302.44 95.4zM1345.75 220.4L1389.05 245.4L1389.05 295.4L1345.75 320.4L1302.44 295.4L1302.44 245.4zM1302.44 445.4L1345.75 470.4L1345.75 520.4L1302.44 545.4L1259.14 520.4L1259.14 470.4zM1389.05 -4.6L1432.35 20.4L1432.35 70.4L1389.05 95.4L1345.75 70.4L1345.75 20.4zM1432.35 220.4L1475.65 245.4L1475.65 295.4L1432.35 320.4L1389.05 295.4L1389.05 245.4zM1432.35 370.4L1475.65 395.4L1475.65 445.4L1432.35 470.4L1389.05 445.4L1389.05 395.4z' stroke='rgba(255%2c 255%2c 255%2c 0.93)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1008'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

}
</style>
