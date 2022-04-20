<template>
<div class="flex justify-between m-4">
    <div class="flex items-center">
        <img class="h-20" :src="image" alt="">
        <div class="ml-1.5 text-sm leading-tight">
            <span class="text-2xl ml-1 font-semibold">{{title}}</span>
            <ul class="breadcrumb mt-1">
                <li><a @click="$router.push('/')" href="#">Home</a></li>
                <li v-for="path,index in paths" :key="index" >
                    <span v-if="path.link == null">{{path.name}}</span>
                    <a v-else @click="$router.push(path.link)" href="#">{{path.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        image:{
            default:require('~/static/png/018-pantone.png')
        },
        title:{
            default:"Text"
        },
        paths:{
            default:[
               
            ]
        }
    },
    computed:{
        
    }
}
</script>

<style>

</style>
