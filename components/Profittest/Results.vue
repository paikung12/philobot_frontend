<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Results Test</span>
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
    <div class="flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div class=" my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <h1 class="text-5xl">+224%</h1>
            <div>
                <span>Profit </span>
            </div>
        </div>
        <v-divider vertical></v-divider>
        <div class="  my-1 px-1 w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-1/2">
            <h1 class="text-5xl  text-red-400">-24%</h1>
            <div>
                <span class=" text-red-400">Risks</span>
            </div>
        </div>
    </div>
    <div class="m-3 mt-5 h-full py-6 px-6 rounded-lg border border-gray-200  text-sm text-justify">
        can be set up to purchase in advance but can't set up to sell in advance
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
