<template>
<div>
    <Core-City></Core-City>
    <img src="" ref="ximg" class="w-full" alt="">
    <v-card flat class="pa-3 mt-2 pl-2">
        <v-card-text class="d-flex">

            <vs-avatar size="120" history circle>
                <img v-if="!imageProfile" src="~/static/images/avatars/1.png">
                <!-- <img v-else :src="$url+imageProfile" alt=""> -->
                <img v-else :src="$url+imageProfile" alt="">
            </vs-avatar>

            <img src="" ref="imgs" alt="">
            <!-- upload photo -->
            <div class="ml-4 mt-4">
                <h3 class="text-3xl font-semibold ml-2">{{form.display_name}}</h3>
                <div class="mt-2">
                    <Core-ImageInput @profileImage="getFileImage"></Core-ImageInput>
                </div>
            </div>

        </v-card-text>
        <v-card-text>
          
            <form @submit.prevent="updateProfile" class="multi-col-validation mt-6">
                <div class="flex flex-col md:flex-row md:flex-wrap">
                    <div class="w-full flex">
                        <h2 class="w-full md:w-9/12 text-2xl mb-4">
                            <v-icon class="mr-2 ">em em-female-technologist</v-icon> General Profile
                        </h2>
                        <v-chip v-if="form.register_by == 'Facebook'" class="ma-2 w-full md:w-3/12 " color="blue" dark small>
                            <v-icon>mdi-facebook</v-icon> Register By Facebook
                        </v-chip>
                        <v-chip v-else-if="form.register_by == 'Google'" class="ma-2 w-full md:w-3/12 " color="grey" dark small>
                            <v-icon>mdi-google</v-icon> Register By Google
                        </v-chip>
                        <v-chip v-else class="ma-2 w-full md:w-3/12 " color="primary" small>
                            <v-icon>mdi-login</v-icon> Register By Website
                        </v-chip>
                    </div>
                    <div class="w-full">
                        <v-alert v-if="!nonName" type="error" outlined>
                            ชื่อ-สกุล ไม่ตรงกับบัตรประจำตัวประชาชน โปรดแก้ไขข้อมูล
                        </v-alert>
                    </div>
                    <v-text-field class="w-full md:w-1/2 mt-2 pl-2" maxlength="20" v-model="form.display_name" prepend-inner-icon="em em-bust_in_silhouette" label="Display Name" dense outlined></v-text-field>
                    <v-text-field readonly class="w-full md:w-1/2 mt-2 pl-2" v-model="form.email" prepend-inner-icon="em em-email" label="E-mail" dense outlined></v-text-field>
                    <!-- <v-text-field disabled class="w-full md:w-1/2 mt-2 pl-2 " v-model="form.username" label="username" dense outlined></v-text-field> -->
                    <v-text-field required :readonly="kyc.user_verified" maxlength="15" class="w-full  md:w-1/2 mt-2 pl-2" v-model="form.first_name" prepend-inner-icon="em em-man-frowning" label="First Name" dense outlined></v-text-field>
                    <v-text-field required :readonly="kyc.user_verified" maxlength="15" class="w-full md:w-1/2 mt-2 pl-2" v-model="form.last_name" prepend-inner-icon="em em-man-frowning" label="Last name" dense outlined></v-text-field>

                    <br><br>
                    <h2 class="w-full text-2xl">
                        <v-icon class="mr-2">em em-house</v-icon> Address
                    </h2>
                    <v-checkbox label="Foreigner" v-model="form.foreigner"></v-checkbox>
                    <v-text-field class="w-full  pl-2" v-model="form.address" prepend-inner-icon="em em-house" label="Address" dense outlined></v-text-field>
                    <v-text-field readonly v-if="!form.foreigner" class="w-full md:w-1/2 mt-2 pl-2" dense outlined :value="`${form.province} ${form.amphur} ${form.district} ${form.zipcode}`" @click="dialog=true"   type="text" label="Province District" prepend-inner-icon="em em-house_buildings" />
                 </div>
                <br>
                
                <v-btn large block type="submit" color="success">
                    <v-icon>mdi-content-save</v-icon><span class="capitalize font-semibold text-base">Update Profile</span>
                </v-btn>

            </form><br><br><br>
        </v-card-text>
    </v-card>

    <v-dialog
        v-model="dialog"
        scrollable   
        persistent :overlay="false"
        max-width="500px"
        transition="dialog-transition"
    >
        <v-card>
            <v-card-title primary-title>
                ที่อยู่ <v-spacer></v-spacer>
                <v-btn  @click="closeDialog()" color="error" text fab><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
          <v-card-text>
      
            <addressinput-subdistrict v-model="form.district" /> <!-- อำเภอ/เขต -->
            <addressinput-district v-model="form.amphur" /> <!-- จังหวัด -->
            <addressinput-province v-model="form.province" /> <!-- รหัสไปรษณีย์ -->
            <addressinput-zipcode v-model="form.zipcode" />
            <br>
             <v-btn @click="chooseCity()" block color="success">เลือกที่อยู่</v-btn>
          </v-card-text>
        </v-card>
    </v-dialog>
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
    City
} from '~/vuexes/city'
import {
    Web
} from '~/vuexes/web'
 
import moment from 'moment'
export default {
    components: {
      
    },
    data: () => {
        return ({
       
            form: {},
            user: Auth.user,
            showCropper: true,
            data: {},
            src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
            foreigner: false,
            nonName: true,
            kyc: {},
            dialog:false,
        })
    },
    computed: {
        imageProfile() {
            return Auth.user.image_profile
        },
        CityFrom() {
            return City.showName;
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
    },
    async created() {
        await this.initial()
    },
    methods: {
        async copyURL(mytext) {
            try {
                await navigator.clipboard.writeText(`${this.$furl}auth/register?ref=${mytext}`);
                await Web.alertAuto(`Your refferal code is copied`, 1000)

            } catch (e) {
                await Web.alertAuto(`Your refferal code is not copied`, 1000, 'error')
            }
        },
        async createRefCode() {
            let refcode = new moment().format('MMmmDDssYYYhh')
            let create = await Core.putHttp(`/api/account/kyc/${this.kyc.id}/`, {
                refferal_code: refcode
            })
            await this.initial();
        },
        async getMyKyc() {
            let kyc = await Core.getHttp(`/api/account/kyc/?user=${this.user.id}`);
            if (kyc.length > 0) {
                this.kyc = kyc[kyc.length - 1];
                if (this.kyc.user_verified_name_error == true) {
                    this.nonName = false
                }
            }
        },
        async imageuploaded(res) {
            console.log(res);

        },
        async initial() {
            this.form = await Core.getHttp(`/api/account/userprofile/${this.user.id}/`)
            delete this.form.image_profile
          
            await this.getMyKyc();
            if (this.kyc.user_verified == true && this.kyc.refferal_code == null) {
                await this.createRefCode()
            }
        },
        async updateProfile() { 
             let update = await Core.putHttpAlert(`/api/account/userprofile/${this.user.id}/`, this.form)
            await Auth.setUser();

        },
        async getFileImage(file) {
            let image = file //this.$refs.imageProfile.files[0]
            let formData = new FormData()
            formData.append('image_profile', image);
            let update = await Core.putImageHttpAlert(`/api/account/userprofile/${this.user.id}/`, formData)
            await Auth.setUser();
            await this.initial()

            // let cover = await Core.setWaterMark(image)
            // this.$refs.ximg.src = cover.src

        },
        async chooseCity(){
            if(this.form.province && this.form.amphur && this.form.district && this.form.zipcode){
                this.dialog = false
            }else{
                await Web.noti('danger','You city form is required','please select your city.')
            }
        },
        async closeDialog(){
               await this.initial()
            this.dialog = false
        }
    }
}
</script>

<style>

</style>
