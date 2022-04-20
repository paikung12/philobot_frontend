<template>
<div>
    <div class="border-gray-100 border-2 shadow-xl rounded-xl w-full py-7 px-5">
        <div class="grid grid-cols-6 gap-3"> 
            <!-- Image -->
            <div class="col-span-2">
                <img height="350" :src="$url+productA.image">
            </div> 
            <!-- Description -->
            <div class="col-span-4">
                <p class="text-gray-700 font-bold text-xl">{{productA.name}}</p>
                <p class="text-gray-500 mt-4">{{productA.detail}}</p>
                <div class="flex">
                    <v-spacer></v-spacer>
                    <v-btn @click="votting('A',$url+productA.image)"  color="success">Vote</v-btn>
                </div> 
            </div>

        </div>
    </div>
        <br>
     <div class="border-gray-100 border-2 shadow-xl rounded-xl w-full py-7 px-5">
        <div class="grid grid-cols-6 gap-3"> 
            <!-- Image -->
            <div class="col-span-2">
                <img height="350" :src="$url+productB.image">
            </div> 
            <!-- Description -->
            <div class="col-span-4">
                <p class="text-gray-700 font-bold text-xl">{{productB.name}}</p>
                <p class="text-gray-500 mt-4">{{productB.detail}}</p>
                <div class="flex">
                    <v-spacer></v-spacer>
                    <v-btn @click="votting('B',$url+productB.image)"  color="success">Vote</v-btn>
                </div> 
            </div>

        </div>
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
import {
    Web
} from '@/vuexes/web'
export default {
    data: () => {
        return ({
            productA: {},
            productB: {},
            response: false
        })
    },
    async created() {
        await this.startup();
        this.response = true;
    },
    methods: {
        async startup() {
            this.productA = this.vote.store_a
            this.productB = this.vote.store_b
        },
        async votting(choice, img = "") {
            await this.$emit('reload',false)
            let check = await Web.confirm('Do you want to Voting?')
            if (check) {
                let form = {
                    "choicereward": choice,
                    "point_use": this.vote.point_use,
                    "user": this.user.id,
                    "votemode": this.vote.id,
                }
                let data = await Core.postHttpAlert(`/api/vote/voteuse/`, form)
                if (data.id) {
                    if (this.point.current >= this.vote.point_use) {
                        await Auth.cutPoint(this.vote.point_use)
                        await Auth.logPoint(`<img src="${img}" style="height:48px; width:48px;" > Reward Voting ${choice}`, this.vote.point_use, 1, 1)
                    } else {
                        await Web.alert(`More than point`, `error`)
                    }
                }
            }else{
                await this.$emit('reload',true)
            }

        }
    },
    props: {
        vote: {
            default: {}
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
