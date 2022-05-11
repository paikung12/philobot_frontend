<template>
<div>
    <v-alert prominent type="error">
        <v-row align="center">
            <v-col class="grow">
                It's just a demo port. Please add your port to access.
            </v-col>
            <v-col class="shrink">
                <v-dialog v-model="dialog" persistent max-width="1000">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on">
                            <span class="text-white">withdraw money</span>
                        </v-btn>
                    </template>
                    <v-card>
                        <div class="flex flex-wrap -mx-1 sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-3">

                            <div class="my-1 px-1 w-full  sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-3 xl:px-3 xl:w-1/2">
                                <v-card-title>
                                    <div class="p-5 text-center">
                                        <h2 class="text-2xl text-green-400 font-bold md:text-2xl">Crypto Broker</h2>
                                        <p class="text-xs text-white">(so that we can transfer money to Please fill out the correct information)</p>
                                    </div>
                                </v-card-title>

                                <div class="flex  justify-center  flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-3">
                                    <div class="grid grid-cols-2 gap-4 -mt-8">
                                        <div>
                                            <div class="h-32 w-32 relative cursor-pointer mb-5">
                                                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                                <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                                                    <div class="h-full w-full bg-white rounded-lg shadow-lg">
                                                        <div class=" h-full w-full">
                                                            <img class="rounded-lg w-full h-full object-cover" src="https://www.lucid-trader.com/wp-content/uploads/2021/10/binance-logo.png">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="h-32 w-32 relative cursor-pointer mb-5">
                                                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                                <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                                                    <div class="h-full w-full bg-white rounded-lg shadow-lg">
                                                        <div class=" h-full w-full">
                                                            <img class="rounded-lg w-full h-full object-cover" src="data:image/png;base64,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">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="h-32 w-32 relative cursor-pointer mb-5">
                                                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                                <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                                                    <div class="h-full w-full bg-white rounded-lg shadow-lg">
                                                        <div class=" h-full w-full">
                                                            <img class="rounded-lg w-full h-full object-cover" src="https://t1.blockdit.com/photos/2022/02/6200edb89bb6634af909ba34_800x0xcover_XzMkp-5b.jpg">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="h-32 w-32 relative cursor-pointer mb-5">
                                                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                                <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                                                    <div class="h-full w-full bg-white rounded-lg shadow-lg">
                                                        <div class=" h-full w-full">
                                                            <img class="rounded-lg w-full h-full object-cover" src="https://pbs.twimg.com/profile_images/1493078398549348353/wTYBW3dP.png">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="h-32 w-32 relative cursor-pointer mb-5">
                                                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                                <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                                                    <div class="h-full w-full bg-white rounded-lg shadow-lg">
                                                        <div class=" h-full w-full">
                                                            <img class="rounded-lg w-full h-full object-cover" src="https://www.finnomena.com/wp-content/uploads/2021/10/c1d85865-zipmex.png">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="h-32 w-32 relative cursor-pointer mb-5">
                                                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                                <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                                                    <div class="h-full w-full bg-white rounded-lg shadow-lg">
                                                        <div class=" h-full w-full">
                                                            <img class="rounded-lg w-full h-full object-cover" src="https://static.bangkokpost.com/media/content/dcx/2022/01/29/4214335.jpg">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="pt-5 pb-5">
                                <v-divider vertical></v-divider>
                            </div>
                            <div class="my-1 px-1 w-full  sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-3 xl:px-3 xl:w-1/2">
                                <v-card-title>
                                    <div class="p-5 text-center">
                                        <h2 class="text-2xl text-green-400 font-bold md:text-2xl">Fill out the information to connect.</h2>
                                        <p class="text-xs text-gray-400">
                                            (Please check your information before confirmation)</p>
                                    </div>
                                </v-card-title>
                                <div class="p-6 -mt-12">
                                    <label class="text-sm   text-gray-500 tracking-wide flex ">API Key</label>
                                    <v-text-field outlined dense></v-text-field>
                                    <label class="text-sm  text-gray-500 tracking-wide flex ">
                                        API Secret</label>
                                    <v-text-field outlined dense></v-text-field>
                                    <label class="text-sm  text-gray-500 tracking-wide flex ">
                                        Password</label>
                                    <v-text-field outlined dense></v-text-field>
                                    <div class="pt-8">
                                         <v-btn color="#4ade80" block class="product-upgrade-to-pro1 " @click="dialog = false">
                                        <span class="text-white">withdraw money </span>
                                    </v-btn>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-alert>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.product-upgrade-to-pro1 {
    margin-top: px;

    .v-application &.v-btn.v-btn--is-elevated {
        box-shadow: 0 0.5px 5px 0.5px #4ade80 !important;
    }
}

.product-upgrade-to-pro {
    .v-application &.v-btn.v-btn--is-elevated {
        box-shadow: 0 0.5px 5px 0.5px #EF7983 !important;
    }
}
</style>
