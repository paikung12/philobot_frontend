<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Trading Statistics</span>
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
    <div class="h-full py-6 px-6 rounded-xl  bg-white">
        <v-img class=" h-80 rounded-2xl " rounded-lg src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ESNVE4J7AZA4LNIFTNOP5LVRJA.png"></v-img>
    </div>

    <p class="mt-2">
        View detailed statistics of your trades. <button class="text-blue-600 hover:underline" target="_blank">advanced statistics</button>.
    </p>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
