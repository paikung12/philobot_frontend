<template>
<v-row v-if="response">
    <v-col cols="12" md="6">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img height="250" :src="$url+productA.image"></v-img>

            <v-card-title>{{productA.name}}</v-card-title>

            <v-card-text>
                <div>{{productA.detail}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <vs-button @click="votting('A',$url+productA.image)" block floating color="#4FE54C" size="large">
                            Vote
                        </vs-button>
                    </v-col>
                </v-row>
            </v-container>

        </v-card>
    </v-col>
    <v-col cols="12" md="6">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img height="250" :src="$url+productB.image"></v-img>

            <v-card-title>
                <div>{{productB.name}}</div>
            </v-card-title>

            <v-card-text>
                <div>{{productB.detail}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <vs-button @click="votting('B',$url+productB.image)" block floating color="#4FE54C" size="large">
                            Vote
                        </vs-button>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-col>
</v-row>
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
