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
                            Create New Password
                        </h1><br>
                        <!-- <p>
                            Let's build someting great
                        </p><br> -->
                        <div>
                            <div v-if="userCheckError">
                                <v-alert dense outlined text type="error" :value="true">
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
                          <div v-if="errorRegister.password_confirm">
                            <v-alert dense outlined text v-for="(message,i) in errorRegister.password_confirm" :key="i" type="error" :value="true">
                              {{message}}
                            </v-alert>
                          </div>

                            <div v-if="errorRegister.phone_number">
                                <v-alert dense outlined text v-for="(message,i) in errorRegister.phone_number" :key="i" type="error" :value="true">
                                    {{message}}
                                </v-alert>
                            </div>
                        </div>
<!--                      <v-alert v-if="(form.password != form.password_confirm) && (form.password != '' && form.password_confirm != '')" type="error">Password and Password Confirm not match!</v-alert>-->
                        <v-text-field  :type="isPasswordVisible ? 'text' : 'password'" prepend-inner-icon="em em-closed_lock_with_key" v-model="form.password" required color="primary" outlined  label="Password" :append-icon="isPasswordVisible ? `mdi-eye-off-outline` : `mdi-eye-outline`" @click:append="isPasswordVisible = !isPasswordVisible"  class="mb-3"></v-text-field>
                        <v-text-field :type="isPasswordVisible2 ? 'text' : 'password'" prepend-inner-icon="em em-closed_lock_with_key" v-model="form.password_confirm" required color="primary" outlined  label="Confirm Password" :append-icon="isPasswordVisible2 ? `mdi-eye-off-outline` : `mdi-eye-outline`" @click:append="isPasswordVisible2 = !isPasswordVisible2"  class="mb-3"></v-text-field>

                        <v-btn type="submit" x-large dark block class="bg-primary-g mt-4"  >
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
          isPasswordVisible2:false,
            form: {},
            error: {},
            errorRegister: {},
            userCheckError: false,
             show1: false,
        })
    },
    async created() {

    },
    methods: {
        async forgot() {
          if(this.form.password == this.form.password_confirm){
            this.form.user_id = this.$route.query.user_id
            this.form.timestamp = this.$route.query.timestamp
            this.form.signature = this.$route.query.signature
            await Web.switchLoad(true)
            let user = await Core.postHttp(`/api/auth/v2/reset-password/`, this.form)
             await Web.switchLoad(false)
            console.log(user)
            if (user.detail && user.detail != 'เกิดข้อผิดพลาดกรุณากด link จาก Email ใหม่อีกครั้ง') {
                this.form = {}
                await Web.alert(user.detail);
                await this.$router.push('/auth/login')

            } else {
                this.errorRegister = user
             //   await Web.alerterror(user.detail , 'error');
            }}else{
            this.errorRegister = {password_confirm : ["Passwords don't match"]}
            //await Web.alerterror("Password is not match" , 'error');
          }

        },

    }
}
</script>
