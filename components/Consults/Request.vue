<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light"> Send system consultation automatic training system</span>
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

    <div class="flex flex-wrap -mx-px  sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-1">
        <div class="my-px px-px w-full  sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="p-6 -mt-5">
                <label class="text-sm   text-gray-700 tracking-wide flex ">Why do you want to build a Robot?</label>
                <v-text-field   outlined dense></v-text-field>
                <label class="text-sm  text-gray-700 tracking-wide flex ">
                    Have you ever used any of our bots?</label>
                <v-text-field   outlined dense></v-text-field>
                <label class="text-sm   text-gray-700 tracking-wide flex ">
                    Which market are you interested in wanting the robot to go with? (Future/Spot)</label>
                <v-text-field   outlined dense></v-text-field>
                <label class="text-sm   text-gray-700 tracking-wide flex ">How do you think having a robot can help you trade?</label>
                <v-text-field   outlined dense></v-text-field>
            </div>
        </div>

        <!-- <------ SETTING ROBOT --------->

        <div class="my-px px-px w-full  sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <div class="p-1 ml-3">
                <label class="text-sm   text-gray-700 tracking-wide flex ">
                    Describe the automated training system you need.</label>
                <v-textarea outlined name="input-7-4"  ></v-textarea>
                <div class="-mt-5">
                    <span class="text-sm underline text-green-400  flex ">
                        Get a discount for creating a trading robot of 7000 baht for VIP level only.</span>
                </div>
                <div class="flex gap-2 justify-center">
                    <v-btn color="#4ade80" class="product-upgrade-to-pro ">
                        <span class="text-white">Use Robot</span>
                    </v-btn>

                </div>
            </div>

            <div class="mt-6 ml-3">
                <div class="m-3 mt-5 h-full py-6 px-6 rounded-lg border border-gray-200  text-sm text-justify">
                    Note: We accept trading robots from basic to advanced. When creating a trading robot with us
                    It can be run through the Philobot system for free, 24 hours a day. You can send a request for a consultation.
                    and can estimate the cost of creating a trading robot
                </div>
            </div>

        </div>
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
