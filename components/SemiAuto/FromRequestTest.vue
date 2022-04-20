<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button class="btn-chat" color="#FF964A" @click="active=!active">
                <span class="span">
                    Request test
                </span>

            </vs-button>
            <vs-dialog prevent-close v-model="active">
                <template #header>
                    <h4 class="not-margin">

                    </h4>
                </template>

                <div class="con-form">
                    <h1 class="text-4xl font-semibold leading-9 text-green-400 text-center">Free for request test!</h1>
                    <p class="text-base leading-normal text-center text-green-400 mt-6">
                        Please check the download link to the email. <br />
                    </p>
                </div>

                <template #footer>
                    <div class="footer-dialog">
                        <vs-button @click="store()" block color="#17c964">
                            Submit Request Test
                        </vs-button>
                    </div>
                </template>
            </vs-dialog>

        </div>

    </template>
</div>
</template>

<script>
import {
    Web
} from '~/vuexes/web'
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
export default {
    props: {
        ea: {
            default: {}
        }
    },
    data: () => ({
        active: false,
    }),

    methods: {
        async store() {
            this.active = false
            if (await Web.confirm(`Do you want to use request test?`)) {
                let check = await Core.getHttp(`/api/ea/requesttest/?user=${this.user.id}&product=${this.ea.id}`)
                if (check.length == 0) {
                    let form = {
                        "code": 'RT' + Date.now(),
                        "link": "",
                        "user": this.user.id,
                        "product": this.ea.id
                    }
                    let data = await Core.postHttpAlert(`/api/ea/requesttest/`, form)
                    if (data.id) {
                        this.active = false;
                        await this.$router.push('/accountstatus?tab=2')
                    }
                } else {
                  await Web.alert(`This Product you 're used.`,'error')
                 
                }

            }  
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

<style scoped>

</style>
