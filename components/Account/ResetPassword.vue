<template>
<div>
    <div class="px-3">
        <v-card-text class="pt-5" v-if="(user.register_by=='Register')|| (user.register_by == null)|| (user.register_by == 'Web')">
            <v-row>
                <v-col cols="12" sm="8" md="8" class="-mt-3">
                    <v-col cols="12" md="6">
                    <div v-if="error.old_password">
                        <v-alert dense outlined text v-for="(message,i) in error.old_password" :key="i" type="error" :value="true">
                            {{message}}
                        </v-alert>
                    </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div v-if="error.password">
                            <v-alert dense outlined text v-for="(message,i) in error.password" :key="i" type="error" :value="true">
                                {{message}}
                            </v-alert>
                        </div>
                        <div v-if="error.password_confirm">
                            <v-alert dense outlined text v-for="(message,i) in error.password_confirm" :key="i" type="error" :value="true">
                                {{message}}
                            </v-alert>
                        </div>
                    </v-col>
                    <form @submit.prevent="changePassword()" ref="formResetPassword">
                        <h2 class="text-xl mt-4 mb-4">Change Password</h2>
                        <v-text-field :type="isPasswordVisible ? 'text' : 'password'" :append-icon="isPasswordVisible ? `mdi-eye-off-outline` : `mdi-eye-outline`" @click:append="isPasswordVisible = !isPasswordVisible" required class="w-full md:w-1/2 m-1"  v-model="form.old_password" prepend-inner-icon="em em-lock" label="Old Password" dense outlined></v-text-field>
                        <v-text-field :type="isPasswordVisible1 ? 'text' : 'password'" :append-icon="isPasswordVisible1 ? `mdi-eye-off-outline` : `mdi-eye-outline`" @click:append="isPasswordVisible1 = !isPasswordVisible1" required class="w-full md:w-1/2 m-1" v-model="form.password" prepend-inner-icon="em em-closed_lock_with_key" label="New Password" dense outlined></v-text-field>
                        <v-text-field :type="isPasswordVisible2 ? 'text' : 'password'" :append-icon="isPasswordVisible2 ? `mdi-eye-off-outline` : `mdi-eye-outline`" @click:append="isPasswordVisible2= !isPasswordVisible2" required class="w-full md:w-1/2 m-1"  v-model="form.password_confirm" prepend-inner-icon="em em-closed_lock_with_key" label="Confirm New Password" dense outlined></v-text-field>
                        <vs-button floating type="submit" color="success">Update Password</vs-button>
                    </form>
                </v-col>
                    <img contain style="width:180px; height:260px;" src="~/static/images/3d-characters/pose-m-1.png" class="security-character m-3 mt-8" />
            </v-row>
        </v-card-text>
        <v-card-text v-else>
            <div class="p-6">
                <v-alert outlined text type="info" :value="true">
                    You are logged in with a social network, you cannot change your password.
                </v-alert>
            </div>

        </v-card-text>
    </div>
</div>
</template>

<script>
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
import {
    Web
} from '~/vuexes/web';
export default {
    data: () => {
        return ({
            form: {},
            error: {},
            user: Auth.user,
            isPasswordVisible: false,
            isPasswordVisible1: false,
            isPasswordVisible2: false,
        })
    },
    methods: {
        async changePassword() {
            let update = await Core.postHttp(`/api/auth/v2/change-password/`, this.form)
            if (!update.detail) {
                this.error = update
            } else {
                this.error = {}
                this.$refs.formResetPassword.reset()
                await Web.alert(`Update Password Success`)
                this.form = {}
            }
        }
    }
};
</script>
