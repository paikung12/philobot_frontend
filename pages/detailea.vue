<template>
<div class="bg-gray-100">
    <Core-BgProfile></Core-BgProfile>

    <div class="relative  md:m-24 mt-20">
        <v-toolbar color="transparent" flat>
            <v-btn  @click="$router.go(-1)" fab   color="primary"><v-icon>mdi-arrow-left-bold</v-icon></v-btn>
        </v-toolbar><br>
        <br><br><br><br>

        <SemiAuto-DetailEA :ea="ea"></SemiAuto-DetailEA>
    </div>
</div>
</template>

<script>
import {
    Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
    Auth
} from '@/vuexes/auth'
export default {
    data() {
        return ({
            ea: {}
        })
    },
    async created() {
        await this.startup();
    },
    methods: {
        async startup() {
            this.ea = await Core.getHttp(`/api/ea/product/${this.$route.query.id}/`)
        }
    },
    computed: {
        user: () => {
            return Auth.user
        },
        point: () => {
            return Auth.point
        },
        tier: () => {
            return Auth.tier
        },
        tiers: () => {
            return Auth.tiers
        },
        setting: () => {
            return Auth.setting
        },

    }
}
</script>

<style>

</style>
