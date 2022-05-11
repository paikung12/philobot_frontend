<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">My Robot Trade</span>
        <div class="flex justify-end">
            <v-tooltip color="#4ade80" top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="#4ade80">
                            mdi-alert-circle-outline
                        </v-icon>
                    </v-btn>
                </template>
                <span>Programmatic tooltip</span>
            </v-tooltip>
        </div>
    </v-card-title>
    <div>
        <v-row class=" justify-center m-5 gap-4">
            <div class="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
                <div class="flex items-center border-b-2 mb-2 py-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif'>
                    <span class="ml-4 text-h6 font-weight-light">Robot Trade</span>
                    <div class="flex justify-end">
                        <v-btn icon>
                            <v-icon color="#EF7983">
                                mdi-cards-heart
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                        <div class=" my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                            <div class="flex flex-wrap overflow-hidden xl:-mx-1">

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-green-400">+225%</h1>
                                    <span class=" text-green-400">Profit</span>
                                </div>

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-red-400">-24%</h1>
                                    <span class=" text-red-400">Risks</span>
                                </div>

                            </div>
                        </div>
                        <v-divider vertical></v-divider>
                        <div class="  my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                            <div class="flex flex-wrap ml-3">
                                <span class="text-gray-800 text-xs  mb-2">
                                    Use robot: 10
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Date: 10/05/2022
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Cypto: BTC ,XRP
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center">
                        <v-btn color="#F56774" class="product-upgrade-to-pro1 ">
                            <span class="text-white">Profit test</span>
                        </v-btn>
                        <v-btn color="#4ade80" class="product-upgrade-to-pro ">
                            <span class="text-white">Use Robot</span>
                        </v-btn>

                    </div>
                </div>
            </div>
           <div class="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
                <div class="flex items-center border-b-2 mb-2 py-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif'>
                    <span class="ml-4 text-h6 font-weight-light">Robot Trade</span>
                    <div class="flex justify-end">
                        <v-btn icon>
                            <v-icon color="#EF7983">
                                mdi-cards-heart
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                        <div class=" my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                            <div class="flex flex-wrap overflow-hidden xl:-mx-1">

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-green-400">+225%</h1>
                                    <span class=" text-green-400">Profit</span>
                                </div>

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-red-400">-24%</h1>
                                    <span class=" text-red-400">Risks</span>
                                </div>

                            </div>
                        </div>
                        <v-divider vertical></v-divider>
                        <div class="  my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                            <div class="flex flex-wrap ml-3">
                                <span class="text-gray-800 text-xs  mb-2">
                                    Use robot: 10
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Date: 10/05/2022
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Cypto: BTC ,XRP
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center">
                        <v-btn color="#F56774" class="product-upgrade-to-pro1 ">
                            <span class="text-white">Profit test</span>
                        </v-btn>
                        <v-btn color="#4ade80" class="product-upgrade-to-pro ">
                            <span class="text-white">Use Robot</span>
                        </v-btn>

                    </div>
                </div>
            </div>
            <div class="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
                <div class="flex items-center border-b-2 mb-2 py-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif'>
                    <span class="ml-4 text-h6 font-weight-light">Robot Trade</span>
                    <div class="flex justify-end">
                        <v-btn icon>
                            <v-icon color="#EF7983">
                                mdi-cards-heart
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                        <div class=" my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                            <div class="flex flex-wrap overflow-hidden xl:-mx-1">

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-green-400">+225%</h1>
                                    <span class=" text-green-400">Profit</span>
                                </div>

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-red-400">-24%</h1>
                                    <span class=" text-red-400">Risks</span>
                                </div>

                            </div>
                        </div>
                        <v-divider vertical></v-divider>
                        <div class="  my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                            <div class="flex flex-wrap ml-3">
                                <span class="text-gray-800 text-xs  mb-2">
                                    Use robot: 10
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Date: 10/05/2022
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Cypto: BTC ,XRP
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center">
                        <v-btn color="#F56774" class="product-upgrade-to-pro1 ">
                            <span class="text-white">Profit test</span>
                        </v-btn>
                        <v-btn color="#4ade80" class="product-upgrade-to-pro ">
                            <span class="text-white">Use Robot</span>
                        </v-btn>

                    </div>
                </div>
            </div>
            <div class="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
                <div class="flex items-center border-b-2 mb-2 py-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif'>
                    <span class="ml-4 text-h6 font-weight-light">Robot Trade</span>
                    <div class="flex justify-end">
                        <v-btn icon>
                            <v-icon color="#EF7983">
                                mdi-cards-heart
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                        <div class=" my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                            <div class="flex flex-wrap overflow-hidden xl:-mx-1">

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-green-400">+225%</h1>
                                    <span class=" text-green-400">Profit</span>
                                </div>

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-red-400">-24%</h1>
                                    <span class=" text-red-400">Risks</span>
                                </div>

                            </div>
                        </div>
                        <v-divider vertical></v-divider>
                        <div class="  my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                            <div class="flex flex-wrap ml-3">
                                <span class="text-gray-800 text-xs  mb-2">
                                    Use robot: 10
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Date: 10/05/2022
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Cypto: BTC ,XRP
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center">
                        <v-btn color="#F56774" class="product-upgrade-to-pro1 ">
                            <span class="text-white">Profit test</span>
                        </v-btn>
                        <v-btn color="#4ade80" class="product-upgrade-to-pro ">
                            <span class="text-white">Use Robot</span>
                        </v-btn>

                    </div>
                </div>
            </div>
            <div class="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
                <div class="flex items-center border-b-2 mb-2 py-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif'>
                    <span class="ml-4 text-h6 font-weight-light">Robot Trade</span>
                    <div class="flex justify-end">
                        <v-btn icon>
                            <v-icon color="#EF7983">
                                mdi-cards-heart
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                        <div class=" my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                            <div class="flex flex-wrap overflow-hidden xl:-mx-1">

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-green-400">+225%</h1>
                                    <span class=" text-green-400">Profit</span>
                                </div>

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-red-400">-24%</h1>
                                    <span class=" text-red-400">Risks</span>
                                </div>

                            </div>
                        </div>
                        <v-divider vertical></v-divider>
                        <div class="  my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                            <div class="flex flex-wrap ml-3">
                                <span class="text-gray-800 text-xs  mb-2">
                                    Use robot: 10
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Date: 10/05/2022
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Cypto: BTC ,XRP
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center">
                        <v-btn color="#F56774" class="product-upgrade-to-pro1 ">
                            <span class="text-white">Profit test</span>
                        </v-btn>
                        <v-btn color="#4ade80" class="product-upgrade-to-pro ">
                            <span class="text-white">Use Robot</span>
                        </v-btn>

                    </div>
                </div>
            </div>
            <div class="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
                <div class="flex items-center border-b-2 mb-2 py-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif'>
                    <span class="ml-4 text-h6 font-weight-light">Robot Trade</span>
                    <div class="flex justify-end">
                        <v-btn icon>
                            <v-icon color="#EF7983">
                                mdi-cards-heart
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                        <div class=" my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                            <div class="flex flex-wrap overflow-hidden xl:-mx-1">

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-green-400">+225%</h1>
                                    <span class=" text-green-400">Profit</span>
                                </div>

                                <div class="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/2">
                                    <h1 class="text-2xl  text-red-400">-24%</h1>
                                    <span class=" text-red-400">Risks</span>
                                </div>

                            </div>
                        </div>
                        <v-divider vertical></v-divider>
                        <div class="  my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                            <div class="flex flex-wrap ml-3">
                                <span class="text-gray-800 text-xs  mb-2">
                                    Use robot: 10
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Date: 10/05/2022
                                </span>
                                <span class="text-gray-800 text-xs  mb-2">
                                    Cypto: BTC ,XRP
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center">
                        <v-btn color="#F56774" class="product-upgrade-to-pro1 ">
                            <span class="text-white">Profit test</span>
                        </v-btn>
                        <v-btn color="#4ade80" class="product-upgrade-to-pro ">
                            <span class="text-white">Use Robot</span>
                        </v-btn>

                    </div>
                </div>
            </div>
            <div class="p-5">
                <v-pagination :length="3" circle small></v-pagination>
            </div>
        </v-row>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.product-upgrade-to-pro {
    margin-top: 16px;

    .v-application &.v-btn.v-btn--is-elevated {
        box-shadow: 0 0.5px 5px 0.5px #4ade80 !important;
    }
}

.product-upgrade-to-pro1 {
    margin-top: 16px;

    .v-application &.v-btn.v-btn--is-elevated {
        box-shadow: 0 0.5px 5px 0.5px #EF7983 !important;
    }
}
</style>
