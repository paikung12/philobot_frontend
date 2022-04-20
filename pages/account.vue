<template>
<div class="bg-gray-100">
    <Core-BgProfile></Core-BgProfile>
    <div class="relative  md:m-24 mt-20">
        <div>
            <Core-Title :image="require('~/static/png/034-designthinking.png')" title="Account Setting" :paths="[{name:'Account Setting',link:null}]" ></Core-Title>
        
            <div class=" bg-white     rounded-xl  ">
                <div class="p-2 rounded-xl shadow-md bg-white   ">
                    <v-tabs v-model="tab" show-arrows grow>
                        <v-tab>
                             <img class="h-10 mr-1" src="~/static/png/2885635.png" alt=""> <span class="capitalize font-semibold text-base" >Account</span>
                      
                        </v-tab>
                        <v-tab-item>
                            <Account-Profile></Account-Profile>
                        </v-tab-item>
                        <v-tab>
                            <img class="h-8 mr-1" src="~/static/png/2885647.png" alt=""> <span class="capitalize font-semibold text-base" >Password</span>
                      
                        </v-tab>
                        <v-tab-item>
                            <Account-ResetPassword></Account-ResetPassword>
                        </v-tab-item>
                        <v-tab> 
                            <img class="h-10 mr-1" src="~/static/png/2885550.png" alt=""> <span class="capitalize font-semibold text-base" >KYC</span>
                        </v-tab>
                        <v-tab-item>
                            <Account-Kyc></Account-Kyc>
                        </v-tab-item>
                        <v-tab>
                            <img class="h-10 mr-1" src="~/static/png/2885417.png" alt=""> <span class="capitalize font-semibold text-base" >Partner</span>
                        </v-tab>
                        <v-tab-item>
                            <Account-Partner></Account-Partner>
                        </v-tab-item>
                    </v-tabs>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => {
        return ({
            tab: 0
        })
    }
}
</script>

<style>

</style>
