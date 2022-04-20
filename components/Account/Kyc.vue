<template>
<v-card flat class="mt-5" v-if="response">

    <div class="px-3  mb-5">
        <v-card-text class="">
            <v-alert v-if="kyc.user_verified" type="success" :value="true">
                คุณได้ทำการยืนยันตัวตนเรียบร้อยแล้ว
            </v-alert>
            <v-alert v-if="kyc.user_verified == false" type="warning" :value="true">
                คุณยังไม่ได้ทำการยืนยันตัวตน โปรดตรวจสอบข้อมูล หากคุณกรอกข้อมูลแล้ว รอระบบตรวจสอบ 1-2 วันทำการ
            </v-alert>
            <v-alert v-if="kyc.user_verified_image_card_error == true && kyc.user_verified == false" type="error" :value="true">
                ภาพถ่ายสำเนาบัตรประจำตัวประชาชน มีปัญหา
            </v-alert>
            <v-alert v-if="kyc.user_verified_image_selfie_error == true && kyc.user_verified == false" type="error" :value="true">
                ภาพถ่าย selfie กับบัตรประจำตัวประชาชน มีปัญหา
            </v-alert>
            <v-alert v-if="kyc.user_verified_name_error == true && kyc.user_verified == false" type="error" :value="true">
                ชื่อ-สกุล ไม่ตรงกับบัตรประจำตัวประชาชน
            </v-alert>
            <v-alert v-if="kyc.user_verified_id_error == true && kyc.user_verified == false" type="error" :value="true">
                เลขบัตรประชาชน ไม่ตรงกับบัตรประจำตัวประชาชน
            </v-alert>
            <v-alert v-if="kyc.phone_verified == false && kyc.user_verified == false" type="error" :value="true">
                ยังไม่ได้ยืนยันตัวตนผ่าน มือถือ (OTP)
            </v-alert>

            <div class="py-10 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 justify-center items-center">
                        <div class="md:5/12 lg:w-5/12">
                            <img class="w-56" src="~/static/png/4040329.png" alt="">
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-xl text-gray-900 font-bold md:text-xl">1.Verify Identity Card Number.</h2>
                            <p class="mt-6 text-gray-600">Verify your identity by entering your ID card number or passport number.</p>
                            <AccountKYC-IDCard :kyc="kyc" @reload="getMyKyc"></AccountKYC-IDCard>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-10 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 justify-center items-center">
                        <div class="md:5/12 lg:w-5/12">
                            <img class="w-56" src="~/static/png/4736559.png" alt="">
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-xl text-gray-900 font-bold md:text-xl">2.Upload your card.</h2>
                            <p class="mt-6 text-gray-600">Verification of identity by uploading a picture of an ID card.</p>
                                <v-btn v-if="kyc.image_card" @click="openImage(kyc.image_card)"  text color="success"><v-icon class=" text-green-500 mr-2">mdi-eye</v-icon><span class="capitalize text-green-500 font-semibold text-base" >View Your Image</span> </v-btn>
                              <input class="text-sm cursor-pointer w-36  hidden" v-if="!kyc.user_verified" @input="storeKycCard('image_card')" ref="image_card" type="file" accept=".jpeg,.png,.jpg,GIF">
                               
                                <div class="flex justify-center mt-4">
                                    <v-spacer class="hidden md:block"></v-spacer>
                                    <v-btn v-if="!kyc.user_verified" @click="$refs.image_card.click()" color="success">Upload Image</v-btn>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-10 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 justify-center items-center">
                        <div class="md:5/12 lg:w-5/12">
                            <img class="w-56" src="~/static/png/4187234.png" alt="">
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-xl text-gray-900 font-bold md:text-xl">3.Upload selfie with your card.</h2>
                            <p class="mt-6 text-gray-600">Verify your identity by uploading a picture of your account number.</p>
                                <v-btn v-if="kyc.image_selfie" @click="openImage(kyc.image_selfie)"  text color="success"><v-icon class=" text-green-500 mr-2">mdi-eye</v-icon><span class="capitalize text-green-500 font-semibold text-base" >View Your Image</span> </v-btn>
                              <input class="text-sm cursor-pointer w-36  hidden" v-if="!kyc.user_verified" @input="storeKycCard('image_selfie')" ref="image_selfie" type="file" accept=".jpeg,.png,.jpg,GIF">
                   

                                 <div class="flex justify-center mt-4">
                                    <v-spacer class="hidden md:block"></v-spacer>
                                    <v-btn v-if="!kyc.user_verified" @click="$refs.image_selfie.click()" color="success">Upload Image</v-btn>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

 
       
        </v-card-text>
     <!-- <v-col cols="12" md="4" class="mt-10" v-if="false">
                <h2> 4. Phone number OTP (one-time-password)</h2>
                <div class="center">
                    <vs-button floating @click="active=!active" color="#4ade80" class="mt-6">
                        Add Phone Number
                    </vs-button>
                    <vs-dialog v-model="active">
                        <template #header>
                            <h4 class="not-margin">
                                The OTP input is used by a one-time password.
                            </h4>
                        </template>
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="12" sm="6" md="5" class=" lg:ml-48 md:ml-14">
                                    <v-text-field outlined prepend-icon="mdi-phone" label="Regular"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <vs-button floating color="#4ade80" size="large" class="mt-1">Sent OTP</vs-button>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-otp-input length="4"></v-otp-input>
                                </v-col>
                                <v-col cols="12" sm="6" md="12">
                                    <vs-button floating block color="#4ade80" size="large" class="mt-1">Submit OTP</vs-button>
                                </v-col>

                            </v-row>
                        </v-container>
                    </vs-dialog>
                </div>
            </v-col> -->
    </div>
    <v-dialog
        v-model="dialog"
        scrollable   
          :overlay="false"
        max-width="500px"
        transition="dialog-transition"
    >
        <v-card>
            <img :src="$url+image" alt="">
        </v-card>
    </v-dialog>

    <!-- action buttons -->
</v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    Auth
} from "~/vuexes/auth";
import {
    Core
} from "~/vuexes/core";
import {
    Web
} from "~/vuexes/web";
import watermark from "watermarkjs";
export default {
    data: () => {
        return {
            user: Auth.user,
            kyc: {},
            response: false,
            active: false,
            id: '',
            checkId: false,
            isPassport: false,
            image:'',
            dialog:false,
        };
    },
    async created() {
        await Web.switchLoad(true);
        await this.getMyKyc();
        await Web.switchLoad(false);
    },
    methods: {
        async openImage(image){
            this.image = image
            this.dialog = true;
        },
        async getMyKyc() {
            let kyc = await Core.getHttp(`/api/account/kyc/?user=${this.user.id}`);
            if (kyc.length > 0) {
                this.kyc = kyc[kyc.length - 1];
                this.id = this.kyc.card_id
                await this.checkIdData();
                this.response = true;
            }
        },
        async storeKycCard(typeImage) {
            try {
                let image = this.$refs[typeImage];
                if (image.files.length > 0) {
                    let cover = await Core.setWaterMark(image.files[0]);
                    let file = await Core.dataURLtoFile(cover.src);

                    let formData = new FormData();
                    formData.append(typeImage, file);
                    let update = await Core.putImageHttpAlert(
                        `/api/account/kyc/${this.kyc.id}/`,
                        formData
                    );
                    if (update.id) {
                        let waterMark = await Core.postHttp(`/api/auth/v2/watermark/`, {
                            image: update[typeImage]
                        })
                        console.log('[dsdsd]', update.image_card);
                    }
                    await Web.switchLoad(true);
                    await this.getMyKyc();
                    await Web.switchLoad(false);
                }
            } catch (error) {
                this.$refs[typeImage].value = '';
            }

        },
        async updateCardId() {

            let store = await Core.putHttpAlert(`/api/account/kyc/${this.kyc.id}/`, {
                'card_id': this.id
            })
            await Web.switchLoad(true);
            await this.getMyKyc();
            await Web.switchLoad(false);
        },
        async checkIdData() {
            let id = this.id;
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
    },
};
</script>

<style lang="scss" scoped>
.two-factor-auth {
    max-width: 25rem;
}

.security-character {
    position: absolute;
    bottom: -0.5rem;
}
</style>
