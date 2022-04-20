<template>
  <div class="flex flex-col md:flex-row justify-space-around items-around w-full">
    <v-btn @click="loginFacebook()" class="capitalize " large dark color="blue">
      <v-icon className="mr-2">mdi-facebook</v-icon>
      <span class="capitalize ">Contuine with Facebook</span>
    </v-btn>
    <br>
    <v-btn @click="loginGoogle()" large color="white">
      <img class="h-4 w-auto mr-2" src="~/static/images/logos/google.png" alt="">
      <span class="capitalize ">Contuine with Google</span>
    </v-btn>
  </div>
</template>

<script>
import {
  Web
} from '~/vuexes/web'
import {
  Auth
} from '~/vuexes/auth'
import Firebase from '~/plugins/firebase'
import {
  Core
} from '~/vuexes/core'

export default {
  data: () => {
    return ({})
  },
  async created() {
    await this.initAuth();
  },
  methods: {
    async initAuth() {
      await Web.switchLoad(true)
      const auth = Firebase.Auth
      let user = await Firebase.getRedirectResult(auth)
        .then(async (result) => {

          console.log(result.providerId);
          if (result.providerId == 'facebook.com') {
            const credential = Firebase.FacebookAuthProvider.credentialFromResult(result);
            const user = result.user;
            const token = credential.accessToken;
            const userFacebook = await this.getProfile(token)
            const userReg = await this.getRegisterForm(userFacebook, user.uid, 'Facebook')
            const userLogin = await this.getLoginForm(userFacebook, user.uid)
            console.log('facebook callback')
            await Web.switchLoad(false)
            this.$emit('callback', {
              login: userLogin,
              register: userReg
            })
          } else if (result.providerId == 'google.com') {
            const credential = Firebase.GoogleAuthProvider.credentialFromResult(result);
            let userGoogle = result.user;
            const token = credential.accessToken;
            let fullname = userGoogle.displayName.split(` `)
            userGoogle.first_name = fullname[0]
            userGoogle.last_name = fullname[1]
            userGoogle.name = userGoogle.displayName
            userGoogle.id = userGoogle.uid
            const userReg = await this.getRegisterForm(userGoogle, userGoogle.uid, 'Google')
            const userLogin = await this.getLoginForm(userGoogle, userGoogle.uid)
            console.log('Google callback')
            await Web.switchLoad(false)
            this.$emit('callback', {
              login: userLogin,
              register: userReg
            })
          }

        }).catch(async (error) => {
          await Web.switchLoad(false)
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // AuthCredential type that was used.
          const credential = Firebase.FacebookAuthProvider.credentialFromError(error);
          // ...
        });
    },

    async getProfile(token) {
      let user = await Core.getHttp(`https://graph.facebook.com/v12.0/me?access_token=${token}&fields=id,picture,name,first_name,last_name,website,link,email`)
      return user
    },

    async getRegisterForm(user, uid, type) {
      return {
        "username": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "password_confirm": btoa(`Canabit@${user.email}`) + `Canabit926d42`,
        "password": btoa(`Canabit@${user.email}`) + `Canabit926d42`,
        "email": user.email,
        "display_name": user.name,
        "register_by": type,
        "created_at": "2022-01-10T08:23:44.639702Z",
        "updated_at": "2022-01-10T08:23:44.639702Z"
      }
    },

    async getLoginForm(user, uid) {
      return {
        "username": user.email,
        // "password_confirm": btoa(`Canabit@${user.id}`) + `Canabit` + uid,
        "password": btoa(`Canabit@${user.email}`) + `Canabit926d42`,
      }
    },

    async loginFacebook() {
      await this.$router.push(`/auth/login`)
      let provider = new Firebase.FacebookAuthProvider();
      provider.addScope('public_profile');
      provider.addScope('user_birthday');
      provider.addScope('email');
      const auth = Firebase.Auth;
      auth.languageCode = 'th';
      Firebase.signInWithRedirect(auth, provider);

    },
    async loginGoogle() {
      await this.$router.push(`/auth/login`)
      let provider = new Firebase.GoogleAuthProvider();
      const auth = Firebase.Auth;
      auth.languageCode = 'th';
      Firebase.signInWithRedirect(auth, provider);
    }
  }
}
</script>

<style>

</style>
