<template>
<div>
    <div>
        <section class="min-h-screen flex items-stretch  ">
            <div class="lg:flex w-1/2 hidden bg-green-400 bg-no-repeat bg-cover relative items-center">
                <div class="w-full px-24 z-10 text-white">
                    <h1 class="text-5xl font-bold text-left tracking-wide">CASH BACK</h1><br><br>
                    <h1 class="text-3xl font-bold text-left tracking-wide">Let’s Trade something amazing today.</h1>
                    <p class="text-2xl my-4">Maybe some text here will help me see it better. Oh God. Oke, let’s do it then. </p>
                </div>
            </div>
            <div class="lg:w-1/2 w-full flex items-center justify-center   md:px-16 px-0 z-0">
                <div class="w-full py-6 z-20">

                    <form @submit.prevent="forgot" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <h1 class="font-bold text-4xl">Cash Back</h1><br><br>
                        <h1 class=" font-bold text-2xl">
                             Forgot Password
                        </h1><br>
                        <!-- <p>
                            Let's build someting great
                        </p><br> -->
                          <div>
                          <div v-if="userCheckError">
                            <v-alert dense outlined text  type="error" :value="true">
                                "ไม่พบผู้ใช้งาน"
                            </v-alert>
                        </div>
                        <div v-if="error.detail">
                            <v-alert dense outlined text type="error" :value="true">
                                {{error.detail}}
                            </v-alert>
                        </div>
                        <div v-if="errorRegister.email">
                            <v-alert dense outlined text v-for="(message,i) in errorRegister.email" :key="i" type="error" :value="true">
                                {{message}}
                            </v-alert>
                        </div>
                        <div v-if="errorRegister.password">
                            <v-alert dense outlined text v-for="(message,i) in errorRegister.password" :key="i" type="error" :value="true">
                                {{message}}
                            </v-alert>
                        </div>

                        <div v-if="errorRegister.phone_number">
                            <v-alert dense outlined text v-for="(message,i) in errorRegister.phone_number" :key="i" type="error" :value="true">
                                {{message}}
                            </v-alert>
                        </div>
                    </div>
                        <v-text-field prepend-inner-icon="mdi-card-account-details" v-model="form.login" required color="primary" outlined label="Email" placeholder="Insert Your Email" hide-details class="mb-3"></v-text-field>


                        <v-btn type="submit" x-large dark block class="bg-primary-g mt-4">
                            Forgot Password
                        </v-btn>
                        <div class="d-flex align-center justify-space-between flex-wrap mt-4">
                            <p class="mt-1">Back To
                                <router-link :to="{path:'/auth/login'}">
                                    Login
                                </router-link>
                            </p>
                            <v-spacer></v-spacer>
                        </div>
                    </form>
                    <br>
                    <br>
                </div>

            </div>
        </section>
    </div>


</div>
</template>

<script>
import {
    Core
} from '~/vuexes/core'
import {
    Web
} from '~/vuexes/web'
import {
    Auth
} from '~/vuexes/auth'

export default {
    layout: 'root',
    data: () => {
        return ({
            isPasswordVisible: false,
            form: { login: '', },
            error: {},
            errorRegister: {},
            userCheckError:false
        })
    },
    async created() {

    },
    methods: {
        async forgot() {
             await Web.switchLoad(true)
            let user = await Core.postHttp(`/api/auth/v2/send-reset-password-link/`, this.form)
             await Web.switchLoad(false)
            console.log(user)
            if(user.detail!= 'User not found'){
              Web.alert(user.detail);
              this.form = {}
            }else{
              Web.alerterror(user.detail,'error');
              this.form = {}
            }


        },

    }
}
</script>


