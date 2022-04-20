<template>
<div>  
    <div class="bg-gray-100 rounded p-4"  v-if="response"> 
        <img :src="ss" />
        <div class="flex">
            <v-text-field type="text" placeholder="Captcha" v-model="currentCap" />
            <v-btn  small @click="validateCaptcha()" color="success">Check</v-btn>
        </div> 
    </div>
    <v-alert  v-else type="success" :value="true" text outlined>
        Verify Captcha Success
    </v-alert>
</div>
</template>

<script>
import {
    Core
} from '@/vuexes/core'
import {
    Auth
} from '@/vuexes/auth'
export default {
   props:{
       reload:{
           default:true
       }
   },
    data() {
        return ({
            response: true,
            lists: [],
            cap: '',
            currentCap: '',
            id:'',
            ss:''
        })
    },
    watch:{
        async reload(old,val){ 
            this.response = val
            await this.startup(); 
        }
    },
    async mounted() { 
        this.response = true
        await this.startup(); 
    },
    methods: {
        async startup() {
            this.currentCap = '' 
            this.$refs.captcha = "";
            var charsArray =
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
            var lengthOtp = 6;
            var captcha = [];
            for (var i = 0; i < lengthOtp; i++) {
                //below code will not allow Repetition of Characters
                var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
                if (captcha.indexOf(charsArray[index]) == -1)
                    captcha.push(charsArray[index]);
                else i--;
            }
            var canv = document.createElement("canvas");
            canv.id = "captcha";
            canv.width = 120;
            canv.height = 50;
            var ctx = canv.getContext("2d");
            ctx.font = "25px Georgia";
            ctx.strokeText(captcha.join(""), 0, 30);
            //storing captcha so that can validate you can save it somewhere else according to your specific requirements
            this.cap = captcha.join("");
            //document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
            this.$refs.captcha = canv
            this.ss = canv.toDataURL();
            console.log(this.$refs.captcha,canv)
           
        },
        async validateCaptcha() {
            if (this.currentCap == this.cap) {
                this.$emit('cap', true)
                this.response = false
            } else {
                this.$emit('cap', false)
                alert('Error Captcha')
                await this.startup();
            }
        }

    },
    computed: {
       
    }
}
</script>

<style>
canvas {
    /*prevent interaction with the canvas*/
    pointer-events: none;
}
</style>
