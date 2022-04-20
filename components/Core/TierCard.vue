<template>
<div class=" mt-2 ">

    <div class="bg-white rounded-xl shadow-xl">
        <div class="p-6">
            <div class="flex flex-col space-y-6 md:h-full md:justify-between">
                <div class="flex justify-between">
                    <span :style="`color:${tier.color}`" class="text-xs text-gray-500 font-semibold uppercase tracking-wider rounded-full p-1">
                        <v-icon v-if="tier.name == 'Vip'" style="font-size:16px;">em em-crown</v-icon>
                        {{tier.name}} Tier
                    </span>
                    <span v-if="tier.name!= 'Vip'" class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                        Next {{nextTier.name}}
                    </span>

                </div>
                <div class="flex flex-col md:flex-row gap-2 md:gap-4 justify-between items-center">
                    <div class="flex flex-col space-y-4">
                        <h2 class="text-gray-800 font-bold tracking-widest leading-tight">
                            {{user.first_name}}&nbsp;{{user.last_name}}

                        </h2>
                        <div class="flex items-center gap-4">
                            <p :style="`color:${tier.color}`" class="tracking-wider ccfont text-2xl font-semibold">{{ref_code}} </p>
                        </div>
                    </div>

                    <div>
                        <!-- <v-btn block text x-large><img class="w-6" src="~/static/png/3213595.png" alt="">  <span class="text-3xl text-gray-700 font-black tracking-wider">{{$comma(point.current)}}</span> </v-btn>  -->
                        <div class="flex">
                            <div class="flex items-end">
                                <img class="w-8" src="~/static/png/3213595.png" alt="">
                            </div>

                            <h2 class="text-3xl text-gray-700 font-black tracking-wider ml-1">
                                {{$comma(point.current)}}
                            </h2>
                        </div>

                        <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider md:ml-4">
                            Available Point
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-top:-10%" class="relative rounded-xl w-full h-full   overflow-hidden">
            <svg class="rounded-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path :fill="tier.color" fill-opacity="1" d="M0,64L11.4,69.3C22.9,75,46,85,69,117.3C91.4,149,114,203,137,213.3C160,224,183,192,206,149.3C228.6,107,251,53,274,58.7C297.1,64,320,128,343,138.7C365.7,149,389,107,411,96C434.3,85,457,107,480,101.3C502.9,96,526,64,549,90.7C571.4,117,594,203,617,250.7C640,299,663,309,686,304C708.6,299,731,277,754,245.3C777.1,213,800,171,823,181.3C845.7,192,869,256,891,277.3C914.3,299,937,277,960,266.7C982.9,256,1006,256,1029,250.7C1051.4,245,1074,235,1097,224C1120,213,1143,203,1166,170.7C1188.6,139,1211,85,1234,80C1257.1,75,1280,117,1303,138.7C1325.7,160,1349,160,1371,165.3C1394.3,171,1417,181,1429,186.7L1440,192L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path>
            </svg>

        </div>
    </div>

    <!-- <div :style="`background:${tier.color};`"  
    class="mt-4 md:max-w-xl w-96 h-60 m-auto rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110 ">

        <div class="w-full px-8 absolute top-4">
          <div class="">
                <div class="ml-20 flex justify-between">
                    <p class=" font-light tracking-widest text-sl">
                      <v-icon class="mr-4" size="20" dark >em em-credit_card</v-icon>
                        My Point
                    </p>
                </div>
            </div>

            <div class="">
                <div class="  flex justify-between">
                    <p class="font-light">
                      <v-icon class="mr-2" size="15">em em-male-technologist</v-icon>
                        Name
                    </p>
                    <p class="font-medium tracking-widest">
                        {{user.first_name}} 
                    </p>
                </div>

            </div>
            <div class="pt-1 flex justify-between">
                <p class="font-light">
                  <v-icon size="25" dark >mdi-bitcoin</v-icon>
                    Point
                </p>
                <p class="font-medium tracking-more-wider">
                    {{$comma(point.current)}}
                </p>
            </div>
            <div class="flex justify-between mt-4">
                <div class="">
                    <p class="font-light text-xs">
                      <v-icon class="mr-2" size="13" >em em-second_place_medal</v-icon>
                        Current Tier

                        <p class="ml-8 font-medium tracking-wider text-sm">
                            {{tier.name}}
                        </p>
                </div>
                <div class="">
                    <p class="font-light text-xs text-xs">
                      <v-icon class="mr-2" size="13" >em em-sports_medal</v-icon>
                        Next Tier

                        <p class="ml-8 font-medium tracking-wider text-sm">
                            {{nextTier.name}}
                        </p>
                </div>
            </div>
        </div>
    </div> -->
</div>
</template>

<script>
import {
    Auth
} from '@/vuexes/auth'
import _ from 'lodash'
export default {
    data() {
        return ({
            nextTier: {},
            ref_code: ''
        })
    },
    async created() {
        await this.startup();
        await this.genCode();
    },
    methods: {
        async startup() {
            await this.getNextTier()
        },
        async getNextTier() {
            let next = _.filter(this.tiers, (r) => {
                return r.length > this.tier.length
            })
            if (next.length > 0) {
                this.nextTier = next[0]
            } else {
                this.nextTier = {
                    name: '-'
                }
            }
        },
        comma(Num) {
            Num += '';
            Num = Num.replace(/,/g, '');
            let x
            let x1
            let x2
            x = Num.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{4})/;
            while (rgx.test(x1))
                x1 = x1.replace(rgx, '$1' + '-' + '$2');
            return x1 + x2;
        },

        async genCode() {
            this.ref_code = this.comma(this.kyc.refferal_code)
        }
    },
    computed: {
        user: () => {
            return Auth.user
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
        kyc: () => {
            return Auth.kyc
        },

    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

.bg-cardt {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1094%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 181%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M -527.7805736539019%2c449 C -431.78%2c389.6 -239.78%2c176.2 -47.78057365390197%2c152 C 144.22%2c127.8 240.22%2c336 432.21942634609803%2c328 C 624.22%2c320 720.22%2c118.4 912.2194263460981%2c112 C 1104.22%2c105.6 1286.66%2c276 1392.219426346098%2c296 C 1497.78%2c316 1430.44%2c228.8 1440%2c212' stroke='rgba(255%2c 255%2c 255%2c 0.6)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -706.9478205601276%2c283 C -610.95%2c274.6 -418.95%2c233.2 -226.94782056012764%2c241 C -34.95%2c248.8 61.05%2c320.6 253.05217943987236%2c322 C 445.05%2c323.4 541.05%2c254.6 733.0521794398724%2c248 C 925.05%2c241.4 1071.66%2c309.4 1213.0521794398724%2c289 C 1354.44%2c268.6 1394.61%2c174.6 1440%2c146' stroke='rgba(255%2c 255%2c 255%2c 0.6)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -540.3349754600487%2c319 C -444.33%2c286.6 -252.33%2c133.6 -60.33497546004863%2c157 C 131.67%2c180.4 227.67%2c437.6 419.6650245399514%2c436 C 611.67%2c434.4 707.67%2c161.4 899.6650245399513%2c149 C 1091.67%2c136.6 1271.6%2c375.8 1379.6650245399514%2c374 C 1487.73%2c372.2 1427.93%2c186.8 1440%2c140' stroke='rgba(255%2c 255%2c 255%2c 0.6)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -865.8445963637605%2c365 C -769.84%2c344.2 -577.84%2c267.6 -385.84459636376045%2c261 C -193.84%2c254.4 -97.84%2c353.6 94.15540363623955%2c332 C 286.16%2c310.4 382.16%2c144.6 574.1554036362395%2c153 C 766.16%2c161.4 880.99%2c368 1054.1554036362395%2c374 C 1227.32%2c380 1362.83%2c221.2 1440%2c183' stroke='rgba(255%2c 255%2c 255%2c 0.6)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -708.534149159696%2c248 C -612.53%2c275.6 -420.53%2c407.4 -228.53414915969597%2c386 C -36.53%2c364.6 59.47%2c143.6 251.46585084030403%2c141 C 443.47%2c138.4 539.47%2c355.6 731.465850840304%2c373 C 923.47%2c390.4 1069.76%2c218.4 1211.465850840304%2c228 C 1353.17%2c237.6 1394.29%2c382.4 1440%2c421' stroke='rgba(255%2c 255%2c 255%2c 0.6)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1094'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}

.ccfont {
    font-family: 'Orbitron', sans-serif !important;
}
</style>
