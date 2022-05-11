<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Current income</span>
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
    <div class="w-full m-5 sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-full">
        <h1 class="flex justify-start text-5xl font-bold ">100000 Bath.</h1>
        <h1 class="justify-start ml-3 text-sm flex pt-1 underline">view all history</h1>
    </div>
    <v-divider class="m-8"></v-divider>
    <div class="w-full  sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-full">
        <div class="-mt-7">
            <v-card-title>
                <span class="text-h6 font-weight-light">Your Withdrawable Balance</span>
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
        </div>
        <h1 class="flex m-5 justify-start text-5xl font-bold ">100000 Bath.</h1>
        <h1 class="ml-7 text-sm  flex -pt-1">Withdrawable Balance</h1>
        <div class="m-7  flex justify-start">

            <v-dialog v-model="dialog" persistent max-width="1000">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#F56774" class="product-upgrade-to-pro1 " v-bind="attrs" v-on="on">
                        <span class="text-white">withdraw money</span>
                    </v-btn>
                </template>
                <v-card>
                    <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-3">

                        <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-3 xl:px-3 xl:w-1/2">
                            <v-card-title>
                                <div class="p-5 text-center">
                                    <h2 class="text-2xl text-green-400 font-bold md:text-2xl">Withdraw Money.</h2>
                                    <p class="text-xs text-gray-400">(so that we can transfer money to Please fill out the correct information)</p>
                                </div>
                            </v-card-title>
                            <div class="p-6 -mt-12 ">
                                <label class="text-sm   text-gray-500 tracking-wide flex ">First Name</label>
                                <v-text-field outlined dense></v-text-field>
                                <label class="text-sm  text-gray-500 tracking-wide flex ">
                                    Last Name</label>
                                <v-text-field outlined dense></v-text-field>
                                <label class="text-sm   text-gray-500 tracking-wide flex ">
                                    Choose the receiving Bank</label>
                                <v-text-field outlined dense></v-text-field>
                                <label class="text-sm   text-gray-500 tracking-wide flex ">Attach a scanned copy of your ID card.</label>
                                <v-text-field outlined dense></v-text-field>
                                <label class="text-sm   text-gray-500 tracking-wide flex ">Amount to withdraw (Enter the withdrawal amount in THB)</label>
                                <v-text-field outlined dense></v-text-field>
                            </div>
                        </div>
                        <div class="pt-5 pb-5">
                            <v-divider vertical></v-divider>
                        </div>
                        <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-3 xl:px-3 xl:w-1/2">
                            <v-card-title>
                                <div class="p-5 text-center">
                                    <h2 class="text-2xl text-green-400 font-bold md:text-2xl">Confirm withdraw or not ?</h2>
                                    <p class="text-xs text-gray-400">
                                        (Please check your information before confirmation)</p>
                                </div>
                            </v-card-title>
                            <div class="p-6 -mt-12">
                                <label class="text-sm   text-gray-500 tracking-wide flex ">Charge</label>
                                <v-text-field outlined dense></v-text-field>
                                <label class="text-sm  text-gray-500 tracking-wide flex ">
                                    Amount received (Amount that the customer wants to withdraw-fee)</label>
                                <v-text-field outlined dense></v-text-field>
                            </div>
                        </div>
                    </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#4ade80" class="product-upgrade-to-pro " @click="dialog = false">
                            <span class="text-white">withdraw money </span>
                        </v-btn>
                        <v-btn color="#F56774" class="product-upgrade-to-pro1 " @click="dialog = false">
                            <span class="text-white">Close</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
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
