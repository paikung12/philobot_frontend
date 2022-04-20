<template>
<div class="bg-gray-100">
    <Core-BgProfile></Core-BgProfile>
    <div class="relative  md:m-24 mt-20">
        <Core-Title :image="require('~/static/png/023-app-store.png')" title="EA Product" :paths="[{name:'EA Product',link:null}]"></Core-Title> 
        <div class="mt-3">
            <SemiAuto-ListSemiAuto></SemiAuto-ListSemiAuto>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
