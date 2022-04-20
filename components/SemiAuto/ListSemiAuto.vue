<template>
<div>
    <div class="font-sans  flex flex-col min-h-screen w-full">
        <div>
            <div class="bg-green-400 rounded-xl md:overflow-hidden">
                <div class="px-4 py-16">
                    <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                        <h1 class="font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                            Intelligent innovation, Make your trading easy
                        </h1>

                        <p class="text-white md:text-xl md:px-18">
                            EA service, the automated trading system from CANABIT is not for everyone. If you have studied the information It is worth considering whether this investment strategy and approach fits your expectations. If this approach is Let's go together
                        </p>

                        <div class="hidden md:block h-40 w-40 rounded-full bg-green-500 absolute right-0 bottom-0 -mb-64 -mr-48 "></div>

                        <div class="hidden md:block h-5 w-5 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"></div>
                        <div class="text-center mb-10 mt-10">
                            <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-40 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                        </div>
                    </div>

                </div>

                <svg class="fill-current bg-green-400 text-gray-100 hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>

            <div class="max-w-4xl mx-auto  shadow-lg relative  hidden md:block" style="margin-top: -320px; border-radius: 20px;">
                <div class="h-20 w-20 rounded-full bg-green-500 absolute top-0 left-0 -ml-10 -mt-16" style="z-index: -1;"></div>
                <div class="h-5 w-5 rounded-full bg-green-500 absolute top-0 left-0 -ml-32 mt-12" style="z-index: -1;"></div>
            </div>

            <vs-row w="12" class="-mt-5" justify="center">
                <div v-for="eaproduct,index in eaproduct" :key="index" class="p-2 mt-2">
                    <vs-card>
                        <template #title>
                            <div class="flex flex-wrap mt-2">
                                <div class="">
                                    <h3> {{eaproduct.name}} </h3>
                                </div>
                                <div class="flex justify-end">
                                        <h3 class="text-green-400">Price:{{eaproduct.price}}</h3>
                                </div>
                            </div>
                        </template>
                        <template #img>
                            <img :src="$url+eaproduct.image" alt="">
                        </template>
                        <template #text>
                            <div class="h-16 mt-2">
                                <p class="textellipsis">
                                    {{eaproduct.sub_title}}
                                </p>
                            </div>
                            <div class="flex flex-wrap justify-center mt-2">

                                <!-- <SemiAuto-FromPurchase :ea="eaproduct"></SemiAuto-FromPurchase> -->

                                <SemiAuto-FromRequestTest :ea="eaproduct"></SemiAuto-FromRequestTest>

                                <vs-button class="btn-chat" color="#5EDA9F" @click="$router.push(`/detailea?id=${eaproduct.id}`)">
                                    <span class="span">
                                        More Detail
                                    </span>
                                </vs-button>

                            </div>

                        </template>
                        <template #interactions>
                            <div class="flex">
                                <div class="ml-2" v-for="broker,index_b in eaproduct.broker_full" :key="index_b">

                                    <vs-button color="#FFFFFF">
                                        <img style="height:20px; " :src="$url+broker.image" alt="">
                                        &nbsp;<span class="ml-1 text-gray-500">{{broker.name}}</span>
                                    </vs-button>

                                </div>

                            </div>
                        </template>
                    </vs-card>
                </div>
            </vs-row>
        </div>
    </div>
</div>
</template>

<script>
import {
    Product
} from '~/vuexes/product'
export default {
    data: () => ({
        active: false,
        eaproduct: [],
    }),
    async created() {
        await this.startup()
    },
    methods: {
        async startup() {
            this.eaproduct = await Product.getEAProduct()
        },
    },
}
</script>

<style>
.textellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
