<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Robot Connect</span>
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
    <div class="flex flex-wrap -mx-px  sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-1">
        <div class="my-px px-px w-full  sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="flex">
                <vs-avatar size="120" history circle class="m-2">
                    <v-img width="190" height="180" src="https://cdn.dribbble.com/users/22930/screenshots/2784925/robot_upscale.gif" />
                </vs-avatar>
                <div class="ml-4">
                    <h1 class="text-2xl font-semibold ml-2"> Reblance V.2</h1>
                    <span class="text-sm text-gray-400">@Working trading...</span>
                    <div>
                        <span class="text-sm text-gray-400 ml-3">Standard by PBL-9001 </span>
                    </div>
                </div>
            </div>
            <div class="grid justify-items-start m-2">
                <h1>Detail Robot</h1>
                <div class="mt-1 h-full py-6 px-6 rounded-lg border border-gray-200  text-sm text-justify">
                    can be set up to purchase in advance but can't set up to sell in advance
                </div>
            </div>
            <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

                <div class="my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
                    <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                        <img src="https://cdn-icons.flaticon.com/png/512/3667/premium/3667651.png?token=exp=1651133770~hmac=e07d41d94992c73e269b5a369bc49c1e" alt="image" class="h-10 w-10 rounded-full" />
                        <div>
                            <span class="text-sm">Profit to be Earned</span>
                            <p class="mt-1 text-gray-400 text-sm ">+ 59%</p>
                        </div>
                    </div>
                </div>
                <div class="my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
                    <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                        <img src="https://cdn-icons-png.flaticon.com/512/6660/6660909.png" alt="image" class="h-10 w-10 rounded-full" />
                        <div>
                            <span class="text-sm">Risks that will Occur</span>
                            <p class="mt-1 text-gray-400 text-sm cursor-pointer">- 20%</p>
                        </div>
                    </div>
                </div>
                <div class="my-1 px-1 w-full  sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
                    <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                        <img src="https://cdn-icons-png.flaticon.com/512/6660/6660918.png" alt="image" class="h-10 w-10 rounded-full" />
                        <div>
                            <span class="text-sm">Birthday Robot</span>
                            <p class="mt-1 text-gray-400 text-sm cursor-pointer">12/06/2022</p>
                        </div>
                    </div>
                </div>
                <div class="my-1 px-1 w-full  sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
                    <div class="flex p-5 mt-2 space-x-4 items-center shadow-lg max-w-sm rounded-md">
                        <img src="https://cdn-icons-png.flaticon.com/512/6660/6660955.png" alt="image" class="h-10 w-10 rounded-full" />
                        <div>
                            <span class="text-sm">Number User</span>
                            <p class="mt-1 text-gray-400 text-sm cursor-pointer">124</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <------ SETTING ROBOT --------->

        <div class="my-px px-px w-full  sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <h1 class="text-2xl font-semibold mb-4">Cryptocurrency Focus</h1>
            <div class="p-4">
                <ul class="flex items-center justify-center space-x-2">
                    <!-- cryptocurrency #1 -->
                    <li class="flex flex-col items-center space-y-2">
                        
                        <!-- Ring -->
                        <a class="block bg-white p-1 rounded-full" href="#">
                            <img class="w-16 rounded-full" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png">
                        </a>
                        <!-- cryptocurrency name -->
                        <span class="text-xs text-gray-500">
                            BTC / USDT 
                        </span>
                    </li>

                    <!-- cryptocurrency #1 -->
                    <li class="flex flex-col items-center space-y-2">
                        <!-- Ring -->
                        <a class="block bg-white p-1 rounded-full" href="#">
                            <img class="w-16 rounded-full" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png">
                        </a>

                        <!-- cryptocurrency name -->

                        <span class="text-xs text-gray-500">
                            ETH / USDT
                        </span>
                    </li>

                    <!-- cryptocurrency #2 -->
                    <li class="flex flex-col items-center space-y-2">
                        <!-- Ring -->
                        <a class="block bg-white p-1 rounded-full" href="#">
                            <!-- Thumbnail -->
                            <img class="w-16 rounded-full" src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png">
                        </a>

                        <!-- cryptocurrency name -->

                        <span class="text-xs text-gray-500">
                            XRP / USDT
                        </span>
                    </li>

                    <!-- cryptocurrency #4 -->
                    <li class="flex flex-col items-center space-y-2">
                        <!-- Ring -->
                        <a class="block bg-white p-1 rounded-full" href="#">
                            <img class="w-16 rounded-full" src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png">
                        </a>

                        <!-- cryptocurrency name -->
                        <span class="text-xs text-gray-500">
                            SOL / USDT
                        </span>
                    </li>
                    <!-- cryptocurrency #1 -->
                    <li class="flex flex-col items-center space-y-2">
                        <!-- Ring -->
                        <a class="block bg-white p-1 rounded-full" href="#">
                            <!-- Thumbnail -->
                            <img class="w-16 rounded-full" src="https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png">
                        </a>
                        <!-- cryptocurrency name -->
                        <span class="text-xs text-gray-500">
                            TER / USDT
                        </span>
                    </li>

                </ul>
            </div>
           
            <div class="  mb-5  p-6 border border-gray-100 rounded-lg  sm:flex sm:space-x-8 sm:p-8">
               
                <div class="flex flex-wrap -mx-px  sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-1">
                    
                    <div class="my-px px-px w-full sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
                       
                        <v-autocomplete :items="people" outlined chips small-chips label="Select" item-text="name" item-value="name"></v-autocomplete>
                    </div>

                    <div class="my-px px-px w-full sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
                        <v-text-field label="Balance" append-icon="mdi-currency-usd" outlined></v-text-field>
                    </div>
                    <div class="my-px px-px w-full sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
                        <v-text-field color="error" label="Sell" append-icon="mdi-cart-arrow-up" outlined></v-text-field>
                    </div>

                    <div class="mb-5 my-px px-px w-full sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
                        <v-text-field label="Buy" append-icon="mdi-cart-arrow-down" outlined></v-text-field>
                    </div>

                    <v-btn block color="#4ade80" class="product-upgrade-to-pro ">
                        <span class="text-white">Save Set Robot</span>
                    </v-btn>
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
    data() {
        return {
            people: [{
                    name: 'Bitcoin',
                },
                {
                    name: 'Ethereum',

                },
                {
                    name: 'XRP',

                },
                {
                    name: 'Dogecoin',

                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.product-upgrade-to-pro {
    margin-top: 16px;

    .v-application &.v-btn.v-btn--is-elevated {
        box-shadow: 0 0.5px 5px 0.5px #4ade80 !important;
    }
}
</style>
