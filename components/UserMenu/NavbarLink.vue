<template>
<v-list-item   :class="activateBg" :dark="activate" @click="$router.push(`${path}`)">
    <v-list-item-icon >
     
     <img style=" width:54px!important; height: auto!important;" :src="icon" alt="">
    </v-list-item-icon> 
    <v-list-item-title :class="activateTxt" >
        {{ title }}
    </v-list-item-title>
</v-list-item>
</template>

<script>
export default {
  
    props: {
         xx: {
            type: String,
            default: '/static/png/011-house.png',
        },
        title: {
            type: String,
            default:'text'
        },
        icon: {
            type: String,
            default: '@/static/png/011-house.png',
        },
        path:{
            type:String,
            default:'/'
        }
    },
    computed:{
        activate(){
            return (this.$route.path == this.path)
        },
        activateBg(){ 
            return (this.$route.path == this.path)?`navbar-active shadow-2xl text-gray-600  box-shadows`:``
        },
       
       activateTxt(){ 
            return (this.$route.path == this.path)?`text-gray-600 font-semibold `:`text-gray-400  `
       }
       
    }

}
</script>

<style  scoped>
   
     .box-shadows{
        box-shadow: 0 5px 10px -4px rgb(94 86 105 / 42%);
    }
</style>