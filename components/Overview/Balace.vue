<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Your Balance</span>
        <div class="flex justify-end">
            <v-tooltip  color="#4ade80" top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="#4ade80" >
                            mdi-alert-circle-outline
                        </v-icon>
                    </v-btn>
                </template>
                <span>Programmatic tooltip</span>
            </v-tooltip>
        </div>
    </v-card-title>
    <div>
        <h1 class="text-5xl">26000 USDT</h1>
    </div>

    <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

        <div class="my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="image" class="h-10 w-10 rounded-full" />
                <div>
                    <span class="text-sm">Bitcoin</span>
                    <p class="mt-1 text-gray-400 text-sm ">40,409.42 USDT</p>
                </div>
            </div>
        </div>

        <div class="my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="image" class="h-10 w-10 rounded-full" />
                <div>
                    <span class="text-sm">Ethereum</span>
                    <p class="mt-1 text-gray-400 text-sm cursor-pointer">3,001.94 USDT</p>
                </div>
            </div>
        </div>
        <div class="my-1 px-1 w-full  sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" alt="image" class="h-10 w-10 rounded-full" />
                <div>
                    <span class="text-sm">XRP</span>
                    <p class="mt-1 text-gray-400 text-sm cursor-pointer">0.729 USDT</p>
                </div>
            </div>
        </div>
        <div class="my-1 px-1 w-full  sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" alt="image" class="h-10 w-10 rounded-full" />
                <div>
                    <span class="text-sm">Dogecoin</span>
                    <p class="mt-1 text-gray-400 text-sm cursor-pointer">0.1371 USDT</p>
                </div>
            </div>
        </div>
        <div class="my-1 px-1 w-full  sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" alt="image" class="h-10 w-10 rounded-full" />
                <div>
                    <span class="text-sm">Solana</span>
                    <p class="mt-1 text-gray-400 text-sm cursor-pointer">101.81 USDT</p>
                </div>
            </div>
        </div>
        <div class="my-1 px-1 w-full  sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png" alt="image" class="h-10 w-10 rounded-full" />
                <div>
                    <span class="text-sm">Terra</span>
                    <p class="mt-1 text-gray-400 text-sm cursor-pointer">93.85 USDT</p>
                </div>
            </div>
        </div>

    </div>
    <div class="text-center mt-4 ">
        <v-pagination :length="3" disabled></v-pagination>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
