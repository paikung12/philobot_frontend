<template>
<div>

    <div v-if="kyc.card_id">

        <h2 class="text-green-500 font-semibold text-base"> Your <span v-if="kyc.use_passport">Passport Number </span> <span v-else>ID Card number</span> : {{kyc.card_id}} </h2>

    </div><br>
  
    <div class="flex justify-center mt-4">
        <v-spacer class="hidden md:block"></v-spacer>
        <v-btn v-if="!kyc.user_verified" @click="dialog=true" color="success">Update Data</v-btn>
    </div>

    <v-dialog v-model="dialog" scrollable persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title>
                Update your ID Card Number <v-spacer></v-spacer>
                <v-icon @click="closeDialog()">mdi-close</v-icon>
            </v-card-title>
            <v-card-text>
                <form @submit.prevent="verify()">
                    <v-checkbox label="Use Passport Number" v-model="form.use_passport"></v-checkbox>
                    <v-text-field required class="mt-5" v-model="form.card_id" hint="Please check the correctness ID Number" label="Your ID card number." outlined></v-text-field>

                    <div class="flex">
                        <v-spacer></v-spacer>
                        <v-btn type="submit" color="success">บันทึกข้อมูล</v-btn>
                        <!-- <vs-button v-if="!isPassport && !kyc.user_verified" :disabled="!checkId" type="submit" floating color="#4ade80">Update</vs-button>
                    <vs-button v-else-if="!kyc.user_verified" type="submit" floating color="#4ade80">Update</vs-button> -->
                    </div>
                </form>
            </v-card-text>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import {
    Web
} from "~/vuexes/web";
import {
    Core
} from "~/vuexes/core";
export default {
    props: {
        kyc: {
            default: {}
        }
    },
    data() {
        return ({
            dialog: false,
            form: {}
        })
    },
    async created() {
        await this.init();
    },
    methods: {
        async init() {
            this.form = this.kyc
        },
        async verify() {
            if (this.form.use_passport) {
                await this.saveData();
            } else {
                let check = await this.checkIdData();
                if (check) {
                    await this.saveData();
                } else {
                    await Web.noti('danger', 'Wrong ID Number', 'Your ID Card is not format.')
                }
            }
        },
        async saveData() {
            let store = await Core.putHttpAlert(`/api/account/kyc/${this.kyc.id}/`, {
                'card_id': this.form.card_id,
                'use_passport': this.form.use_passport
            })
            if (store.id) {
                this.dialog = false
                await this.$emit('reload', store)
            }
        },
        async closeDialog() {
            this.dialog = false
            await this.init();
            await this.$emit('reload')
        },
        async checkIdData() {
            let id = this.form.card_id;
            if (!this.IsNumeric(id)) return false;
            if (id.substring(0, 1) == 0) return false;
            if (id.length != 13) {
                this.checkId = false
                console.log(false);
                return false
            }
            let sum = 0;
            for (let i = 0; i < 12; i++)
                sum += parseFloat(id.charAt(i)) * (13 - i);
            if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12))) {
                this.checkId = false
                console.log(false);
                return false
            } else {
                this.checkId = true
                console.log(true);
                return true;
            }

        },
        IsNumeric(input) {
            var RE = /^-?(0|INF|(0[1-7][0-7]*)|(0x[0-9a-fA-F]+)|((0|[1-9][0-9]*|(?=[\.,]))([\.,][0-9]+)?([eE]-?\d+)?))$/;
            return (RE.test(input));
        }
    }
}
</script>

<style>

</style>
