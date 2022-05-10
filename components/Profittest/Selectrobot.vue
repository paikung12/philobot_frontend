<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Select Robot</span>
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

    <v-autocomplete class="" :items="people" outlined chips small-chips label="Select" item-text="name" item-value="name"></v-autocomplete>
    <div class="  rounded-lg shadow-sm p-5 border-dashed border border-green-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">

        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                <vs-avatar size="120" history circle class="m-2">
                    <v-img width="190" height="180" src="https://cdn.dribbble.com/users/22930/screenshots/2784925/robot_upscale.gif" />
                </vs-avatar>
            </div>
            <v-divider vertical></v-divider>
            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                <h1 class="text-2xl font-semibold ml-2"> Reblance V.2</h1>
                <span class="text-sm text-gray-400">User : 65</span>
                <div>
                    <span class="text-sm text-gray-400 ml-3">Birthday : 12-06-2022 </span>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            people: [{
                    name: 'Rebalance 101',
                },
                {
                    name: 'Rebalance XXP',

                },
                {
                    name: 'Rebalance 121',

                },
                {
                    name: 'Rebalance 224',

                },
            ],
        }
    }
}
</script>

<style>

</style>
