<template>
<div>

    <div class="flex flex-col lg:flex-row p-3">

        <div class="w-full lg:w-2/3">
            <div class="flex flex-wrap  lg:-mx-2 xl:-mx-2">
                <div class="w-full pl-5 pr-2 mt-2">
                     <Overview-Addport></Overview-Addport>
                </div>
                <div class="w-full  pl-5  lg:my-2 lg:px-2 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
                    <div class="h-full p-3 shadow-lg bg-white text-green-500 text-lg text-center  -bottom-0 rounded-lg ">
                        <Overview-Balace></Overview-Balace>
                    </div>
                </div>

                <div class="w-full lg:my-2 lg:px-2 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
                    <div class="h-full p-3  shadow-lg bg-white text-green-500 text-lg  text-center rounded-lg">
                        <Overview-Graph></Overview-Graph>
                    </div>
                </div>
            </div>
            <div class="w-full  p-3">
                <div class="shadow-lg bg-white text-green-500 text-lg text-center p-3 rounded-lg col-span-2 -mb-3 ">
                    <Overview-Connectrobot></Overview-Connectrobot>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-2/5 pt-2 ">
            <div class=" p-3 shadow-lg bg-white text-green-500 text-lg text-center rounded-lg  row-span-3  ">
                <Overview-Status></Overview-Status>
            </div>
        </div>
    </div>

    <div class="-mt-1">
        <Core-footer></Core-footer>

    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.product-upgrade-to-pro {
    .v-application &.v-btn.v-btn--is-elevated {
        box-shadow: 0 0.5px 5px 0.5px #EF7983 !important;
    }
}
</style>
