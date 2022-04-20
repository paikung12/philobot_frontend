<template>
<v-carousel cycle hide-delimiter-background show-arrows-on-hover class="rounded-2xl shadow-xl cursor-pointer" v-if="response">
    <v-carousel-item v-for="(slide, i) in slides" :key="i"> 
        <!-- <v-img :src="$url+slide.image"></v-img> -->
        <v-img class="w-full h-full box" :src="$url+slide.image" @click="openLink(slide.url)">
            <div class="ribbon ribbon-top-left"><span>Promotion</span></div>
        </v-img>
    </v-carousel-item>
    <pre>{{slide}}</pre>
</v-carousel>
</template>

<script>
import {
    initial
} from 'lodash'
import {
    Core
} from '~/vuexes/core'
import _ from 'lodash'
export default {
    data: () => {
        return ({
            response: false
        })
    },

    async created() {
        await this.initial();
    },
    methods: {
        async initial() {
            this.slides = await Core.getHttp(`/api/webconfig/slide/?is_active=true`)
            console.log(this.slides)
            this.response = true
        },
        async openLink(link) {
            window.open(link);
        }
    }
}
</script>

<style>

</style>
