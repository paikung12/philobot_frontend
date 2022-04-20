<template>
<div>

    <!-- <v-dialog
    v-model="dialog"

    persistent :overlay="false"
    max-width="600px"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-text> 

                       <Reward-Countdown :vote="vote"></Reward-Countdown>

      </v-card-text>
    </v-card>
  </v-dialog> -->

    <vs-dialog width="550px" not-center v-model="dialog" class="bg-gray-100">
        <template #header>
            <center v-if="vote.id"> <img class="w-10 md:w-40 mtimg" src="~/static/png/trophy.png" alt="">
                <h2 class="ref font-semibold text-4xl mt-2 text-green-500">Reward Volting</h2>
            </center>
            <hr v-if="vote.id" class="m-4">
        </template>

        <div class="con-content">

            <div v-if="response && vote.id">
                <div v-if="vote">
                    <div v-if="!vote.is_ending">
                        <Reward-Countdown :vote="vote"></Reward-Countdown>
                        <hr class="m-4">
                        <div class="mt-5">
                            <Reward-ListDialog @reload="reload" :vote="vote"></Reward-ListDialog>
                        </div>
                    </div>
                    <div v-else>
                          
                         <center> <h2 class="ref font-semibold text-3xl mt-2 text-yellow-500">Win Product</h2></center><br>
                        <div class="border-gray-100 border-2 shadow-xl rounded-xl w-full py-7 px-5">
                            <div class="grid grid-cols-6 gap-3">
                                <!-- Image -->
                                <div class="col-span-2">
                                    <img height="350" :src="$url+result.image">
                                </div>
                                <!-- Description -->
                                <div class="col-span-4">
                                    <p class="text-gray-700 font-bold text-xl">{{result.name}}</p>
                                    <p class="text-gray-500 mt-4">{{result.detail}}</p>
                                
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div v-else>
                <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/273112697_1357001761412987_8215691963314062827_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEA4Oej5IrVvMahCFLjbWmoQDMFlX4gzp5AMwWVfiDOnj8YfpZdK0BjisxixGBpBCpXK1d1JO1bBWnjdxmL42Rf&_nc_ohc=0OwUkz874jsAX9AcKhG&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT8H33vwZxNkgNnacvZnJEg8P6PCTuKjW5HAYyFDbRbBbg&oe=62583FC7" alt="">
            </div>
        </div>

    </vs-dialog>

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
    data: () => {
        return ({
            vote: {},
            response: false,
            result: {},
            dialog: true
        })
    },
    methods: {
        async startup() {
            let votes = await Core.getHttp(`/api/vote/votemode/?is_active=true`)
            if (votes.length > 0) {
                this.vote = votes[votes.length - 1];
                await this.checkVolt();
            }

        },
        async reload(val) {
            this.dialog = val
        },
        async checkVolt() {
            let results = await Core.getHttp(`/api/vote/voteuse/?votemode=${this.vote.id}`)
            let a = _.sumBy(results, {
                choicereward: "A"
            })
            let b = _.sumBy(results, {
                choicereward: "B"
            })
            let result = null
            if (a > b) {
                result = this.vote.store_a
            } else {
                result = this.vote.store_b
            }
            this.result = result
            console.log(a, b, result, this.vote);
        }
    },
    async created() {
        await this.startup();
        this.dialog = true
        this.response = true

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
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Mali:wght@500&display=swap');

.bg-reward {
    background-color: #00C0B1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%2300C0B1' width='11' height='11'/%3E%3Crect fill='%2316c1b0' x='10' width='11' height='11'/%3E%3Crect fill='%2323c2af' y='10' width='11' height='11'/%3E%3Crect fill='%232cc3af' x='20' width='11' height='11'/%3E%3Crect fill='%2334c4ae' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%233ac5ad' y='20' width='11' height='11'/%3E%3Crect fill='%2341c6ad' x='30' width='11' height='11'/%3E%3Crect fill='%2346c6ac' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%234cc7ab' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2351c8ab' y='30' width='11' height='11'/%3E%3Crect fill='%2355c9aa' x='40' width='11' height='11'/%3E%3Crect fill='%235acaaa' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%235ecba9' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2363cca9' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2367cca8' y='40' width='11' height='11'/%3E%3Crect fill='%236bcda8' x='50' width='11' height='11'/%3E%3Crect fill='%236fcea8' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2373cfa7' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2376d0a7' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%237ad1a7' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%237ed1a6' y='50' width='11' height='11'/%3E%3Crect fill='%2381d2a6' x='60' width='11' height='11'/%3E%3Crect fill='%2385d3a6' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%2388d4a6' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%238bd5a6' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%238fd5a6' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%2392d6a6' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%2395d7a6' x='70' width='11' height='11'/%3E%3Crect fill='%2399d8a6' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%239cd8a6' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%239fd9a6' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23a2daa6' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23a5dba6' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23a8dba6' x='80' width='11' height='11'/%3E%3Crect fill='%23abdca7' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23aedda7' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23b1dea7' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23b4dea8' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23b7dfa8' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23bae0a9' x='90' width='11' height='11'/%3E%3Crect fill='%23bde0a9' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23c0e1aa' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23c2e2ab' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23c5e3ab' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23c8e3ac' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23cbe4ad' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23cde5ad' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d0e5ae' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23d3e6af' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23d5e7b0' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23d8e8b1' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23dae8b2' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23dde9b3' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23e0eab4' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23e2eab5' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23e4ebb6' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23e7ecb7' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23e9edb9' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23ecedba' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

.ref {
    font-family: 'Mali', cursive !important;
}

.mtimg {
    margin-top: -100px !important;
}

@media only screen and (max-width: 600px) {
    .mtimg {
        margin: 0 !important;

    }
}
</style>
