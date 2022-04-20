<template>
<v-app   v-if="response">
    <Core-Loading></Core-Loading>
    <UserMenu-MainMenu></UserMenu-MainMenu>
 
    <v-main class="bg-gray-100">
        <Core-Notification />
        <!--class=" md:ml-28 md:mr-28"-->
        <div >
            
            <Nuxt />
        </div>

    </v-main>

</v-app>
</template>

<script>
import {
    Auth
} from '@/vuexes/auth'
import {
    Web
} from "~/vuexes/web";
export default {
    name: 'DefaultLayout',
    data() {
        return {
            isDrawerOpen: false,
            user: {},
            response: false
        }
    },
    async created() {
        await Web.setVuesax(this.$vs)
        await this.initial()
        await Auth.checkUser();
    },
    methods: {
        async initial() {
            await Auth.checkToken();
            this.user = await Auth.setUser();
            await this.checkUser();
            this.response = (this.user.id) ? true : false;
        },
        async checkUser() {
            let user = await Auth.getUser();
            if (!user.id) {
                await this.$router.replace(`/home/`)
            }
        }
    },
    computed:{
        tier(){
            return Auth.tier
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap');

* {
    font-family: 'Noto Sans Thai', sans-serif !important;
}

ul.breadcrumb {
    border-radius: 50px;
    padding: 4px 10px;
    list-style: none;
    background-color: #eee;
}

ul.breadcrumb li {
    display: inline;
    font-size: 12px;
}

ul.breadcrumb li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
}

ul.breadcrumb li a {
    color: #0275d8;
    text-decoration: none;
}

ul.breadcrumb li a:hover {
    color: #01447e;
    text-decoration: underline;
}
</style>
