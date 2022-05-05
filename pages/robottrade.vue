<template>
<div>
    <div class="grid grid-cols-3 gap-3 p-5 flex flex-wrap -mx-1  sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div class=" shadow-lg bg-white text-green-500 text-lg text-center p-3 rounded-lg ">
            <Robottrade-categoryrobot></Robottrade-categoryrobot>
        </div>
        <div class="shadow-lg bg-white text-green-500 text-lg  text-center p-3  rounded-lg">
            <Robottrade-categorycoin></Robottrade-categorycoin>
        </div>
        <div class="shadow-lg bg-white text-green-500 text-lg text-center p-3 rounded-lg  row-span-3">
            <Robottrade-video></Robottrade-video>
        </div>
        <div class="shadow-lg bg-white text-green-500 text-lg text-center p-3 rounded-lg col-span-2 -mb-3 ">
            <Robottrade-tablerobot></Robottrade-tablerobot>
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
