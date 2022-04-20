<template>
<div>
    <div class="p-2 rounded-xl shadow-md bg-white  mb: -mt-24">
        <v-col justify-center>
            <div class="bg-white w-full p-6">
                <div class="pb-3">
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <v-avatar tile size="150" class="m-5">
                                <img :src="$url+ea.image">
                            </v-avatar>
                            <div class="m-5">
                                <div class="pb-2 font-bold text-3xl">{{ea.name}}</div>
                                <h1 class=" text-green-400 text-2xl mt-2">Price : {{ea.price}} $</h1>
                                <h1 class=" text-gray-400  text-1xl leading-6 mt-2">{{ea.sub_title}} </h1>
                            </div>
                        </div>
                        <div class="text-right text-sm leading-7">
                            <div class="flex flex-wrap justify-center m-5">
                                <div class="inline-flex ">
                                  <SemiAuto-FromPurchase :ea="ea"></SemiAuto-FromPurchase>
                                </div>
                                <div class="inline-flex ">
                                  <SemiAuto-FromRequestTest  :ea="ea"></SemiAuto-FromRequestTest>
                                </div>
                            </div>
                          <v-rating readonly  color="orange" class="mr-5"   length="5" size="20"
                                    v-model="rate"
                          ></v-rating>
                        </div>
                    </div>
                    <h2 class="font-bold text-3xl  ml-10 mt-8">
                        Details
                    </h2>
                    <div class="  ml-10 mt-6">
                      <div v-html="ea.detail">
                      </div>
                    </div>
                  <h2 class="font-bold text-3xl  ml-10 mt-8">
                    Reviews
                  </h2>
                  <div class="ml-10 ">

                    <form class="mt-3" @submit.prevent="storeComment()">
                      <v-rating   class="justify-end" color="orange"   length="5" size="24"
                                v-model="form.star" 
                      ></v-rating>
                      <v-textarea v-model="form.comment" class="mt-3" required row="3" outlined></v-textarea>
                      <div class="flex"> <v-spacer></v-spacer> <vs-button type="submit" floating color="success">Comment</vs-button>
                      </div>
                    </form>

                    <div v-for="review, index in reviews" :key="index" class="mt-4 w-full bg-gray-100 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                      <v-toolbar class="w-full" color="transparent" flat>
                        <img alt="avatar" width="50" height="50" class="rounded-full w-16 h-16 mr-4 shadow-lg mb-4 mt-4" :src="$url+review.user_image">
                        <div>
                          <h3 class="text-gray-400 font-semibold text-xl  md:text-left mt-4 ">{{review.user_full}}</h3>
                          <v-rating readonly  color="orange"   length="5" size="20"
                                    v-model="review.star"
                          ></v-rating>
                        </div>
                        <v-spacer></v-spacer>
                        <span class="text-green-400 text-sm font-bold">{{review.created_at}}</span>
                      </v-toolbar >
                      <v-divider></v-divider>
                      <p style="width: 90%" class="text-gray-600 text-lg  p-6 md:text-left ">{{review.comment}} </p><br>
                    </div>
                  </div>
                </div>
            </div>
        </v-col>
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
    data: () => ({
        active: false,
        reviews:[],
        form:{},
        rate:0

    }),
  async created(){
     await this.startup()
  },
  methods:{
      async startup(){
        this.reviews = await Core.getHttp(`/api/ea/review/?product=${this.$route.query.id}`)
        let reviews = _.filter(this.reviews,(r)=>{return r.star > 0})
        this.rate = _.mean(_.map(reviews,'star'))

      },
    async storeComment(){
        this.form.product = this.$route.query.id
        this.form.user = this.user.id
        let data = await Core.postHttpAlert(`/api/ea/review/`,this.form)
      if(data.id){

        await this.startup()
      }
      this.form = {}
    }
  },
  props:{
      ea:{
        default:{}
      }
  },
  computed:{
    user:()=>{return Auth.user},
    point:()=>{return Auth.point},
    tier:()=>{return Auth.tier},
    tiers:()=>{return Auth.tiers},
    setting:()=>{return Auth.setting},

  }
}
</script>

<style>

</style>
