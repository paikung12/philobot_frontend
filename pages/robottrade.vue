<template>
<div>

    <div class="flex flex-col lg:flex-row p-3">

        <div class="w-full lg:w-5/6">
            <div class="flex flex-wrap  lg:-mx-2 xl:-mx-2"> 
                <div class="w-full  pl-5  lg:my-2 lg:px-2 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
                    <div class="h-full p-3 shadow-lg bg-white text-green-500 text-lg text-center  -bottom-0 rounded-lg ">
                        <Robottrade-categoryrobot></Robottrade-categoryrobot>
                    </div>
                </div>

                <div class="w-full lg:my-2 lg:px-2 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
                    <div class="h-full p-3  shadow-lg bg-white text-green-500 text-lg  text-center rounded-lg">
                        <Robottrade-categorycoin></Robottrade-categorycoin>
                    </div>
                </div>
            </div>
            <div class="w-full  p-3">
                <div class="shadow-lg bg-white text-green-500 text-lg text-center p-3 rounded-lg col-span-2 -mb-3 ">
                    <Robottrade-tablerobot></Robottrade-tablerobot>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/6 pt-2">
            <div class="shadow-lg bg-white text-green-500 text-lg text-center rounded-lg  row-span-3  ">
                <Robottrade-video></Robottrade-video>
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
