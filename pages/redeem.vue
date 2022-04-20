<template>
<div class="bg-gray-100">
  <Core-BgProfile></Core-BgProfile>
    <div class="relative  md:m-24 mt-20">
        <Core-Title :image="require('~/static/png/trophy.png')" title="Rewards" :paths="[{name:'REWARDS',link:null}]"></Core-Title>
        
        <v-row class="mt-2">
            <v-col cols="12" md="4">
                <Profilebrand-CardBrand></Profilebrand-CardBrand>
            </v-col>
            <v-col cols="12" md="8">
                <Profilebrand-CardCondition></Profilebrand-CardCondition>
            </v-col>

            <v-col cols="12">
                <Profilebrand-RedeemList></Profilebrand-RedeemList>
            </v-col>
        </v-row>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
