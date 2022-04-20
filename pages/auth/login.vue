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

                    <form @submit.prevent="login" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <h1 class="font-bold text-4xl">Cash Back</h1><br><br>
                        <h1 class=" font-bold text-2xl">
                            <v-icon class="mr-2">em em-raised_hand_with_fingers_splayed</v-icon>
                            Welcome back!
                        </h1>
                        <p>
                            Let's build someting great
                        </p><br>

                          <div>
                            <div v-if="error.non_field_errors">
                              <v-alert dense outlined text  type="error" :value="true">
                                Email,Phone Number or Password is incorrect
                              </v-alert>
                            </div>

                          <div v-if="userCheckError">
                            <v-alert dense outlined text  type="error" :value="true">
                                User not found Please fill out the correct information.
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
                        <v-text-field id="user" prepend-inner-icon="em em-bust_in_silhouette" :rules="[rules.required]" v-model="form.username" required color="primary" outlined label="E-mail or Phone Number" placeholder="E-mail,Phone Number" hide-details class="mb-3"></v-text-field>
                        <br>
                        <v-text-field id="password" prepend-inner-icon="em em-lock"  :rules="[rules.required]" v-model="form.password" required color="primary" outlined :type="isPasswordVisible ? 'text' : 'password'" label="Password" placeholder="············" :append-icon="isPasswordVisible ? `mdi-eye-off-outline` : `mdi-eye-outline`" hide-details @click:append="isPasswordVisible = !isPasswordVisible"></v-text-field>

                        <v-btn id="login_submit" type="submit" x-large dark block class="bg-primary-g mt-6">
                            Login
                        </v-btn>
                        <div class="d-flex align-center justify-space-between flex-wrap mt-4">
                            <p class="mt-1">Don’t have an account?
                                <router-link :to="{path:'/auth/register'}">
                                    Get started
                                </router-link>
                            </p>
                            <v-spacer></v-spacer>
                            <p class="mt-1">
                                <router-link :to="{path:'/auth/forgot'}">
                                    Forgot Password?
                                </router-link>
                            </p>
                        </div>
                    </form>
                    <br>
                    <br>
                    <div class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <center>
                            <p>Or Use Social accounts</p>
                        </center>
                        <Auth-SocialLogin @callback="callback"></Auth-SocialLogin> <br>
                    </div>
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
import _ from "lodash";

export default {
    layout: 'root',
    data: () => {
        return ({
           
            isPasswordVisible: false,
            form: {
                login: '',
                password: ''
            },
          form2:{},
            error: {},
            errorRegister: {},
            userCheckError:false,
            rules: {
              required: value => !!value || 'Required.',
            }
        })
    },
    async created() {
        await Auth.checkUser();
    },
    methods: {
        async login(alert = true) {

            let user = await Core.postHttp(`/api/auth/v2/check/`, this.form)
            if (user.username && user.is_active != false) {
               // this.form.username = user.username
              this.form2.username = user.username
              this.form2.password = this.form.password
              let signin = await Auth.login(this.form2)
                if (signin.key) {
                    await Auth.storeToken(signin.key)
                    await Auth.storeTokenToStorage(signin.key)
                    await this.$router.replace(`/`)
                    this.userCheckError = false
                    return true
                } else {
                    if (alert) {
                        this.error = signin
                    }
                    return false
                }
            }else if(user.is_active == false){
              await Web.switchLoad(false)
              await Web.alert(`Please check your email for activate to login.`,'info')
              await this.$router.replace(`/auth/verify`)
            }

            else{
                this.userCheckError = true
                console.log(this.userCheckError);
            }
        },
        async callback(user) {
            await Web.switchLoad(true)
            this.form = user.login 
            let logined = await this.login(false)
            if (!logined) {
                 this.userCheckError = false
                let registerUser = await Auth.register(user.register)
                if (registerUser.id) {
                    await Web.switchLoad(false)
                    await this.generateKyc(registerUser.id);
                    await this.generatePoint(registerUser.id)
                    await this.$router.replace(`/auth/verify`)
                    console.log(registerUser)
                } else {
                    this.form = {}
                    this.errorRegister = registerUser
                    await Web.switchLoad(false)
                }
            } else {
                this.error = logined
            }
            await Web.switchLoad(false)
            console.log(user);
        },

        async generateKyc(userId) {
            let kyc = await Core.postHttp(`/api/account/kyc/`, {
                user: userId
            })
            if (kyc.id) {
                this.$vs.notification({
                    color: 'success',
                    title: 'สร้างข้อมูล KYC สำเร็จแล้ว',
                })
            } else {
                this.$vs.notification({
                    color: 'danger',
                    title: 'สร้างข้อมูล KYC ไม่สำเร็จ',
                })
            }
        },
      async generatePoint(userId){
        let tiers = await Core.getHttp(`/api/account/tier/`)
        let form = {
          "total": 0,
          "current": 0,
          "tier": tiers[0].id,
          "user": userId
        }
        let data = await Core.postHttp(`/api/account/userpoint/`,form)
        if (data.id) {
          this.$vs.notification({
            color: 'success',
            title: 'สร้างข้อมูล Point สำเร็จแล้ว',
          })
        } else {
          this.$vs.notification({
            color: 'danger',
            title: 'สร้างข้อมูล Point ไม่สำเร็จ',
          })
        }
      },
    }
}
</script>

