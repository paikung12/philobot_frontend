<template>
<div>
    <div class="flex flex-col lg:flex-row p-3">
        <div class="w-full lg:w-5/6">
             <div class="w-full">
                    <Consults-Step></Consults-Step>
                </div>
             <div class="w-full  p-3">
                <div class="shadow-lg bg-white text-green-500 text-lg text-center p-3 rounded-lg col-span-2 -mb-3 ">
                    <Consults-Request></Consults-Request>
                </div>
            </div>
            <div class="w-full  p-3">
                <div class="shadow-lg bg-white text-green-500 text-lg text-center p-3 rounded-lg col-span-2 -mb-3 ">
                    <Consults-Robottrade></Consults-Robottrade>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/6 pt-2">
            <div class="shadow-lg bg-white text-green-500 text-lg text-center rounded-lg  row-span-3  ">
                <Consults-Video></Consults-Video>
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

<style>

</style>
