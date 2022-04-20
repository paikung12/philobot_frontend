<template>
<v-dialog v-model="dialog" persistent v-if="dialog" max-width="500">
    <v-card v-if="response">
        <v-card-title>
            เลือก จังหวัด อำเภอ ตำบล
            <v-spacer></v-spacer>
            <v-btn @click="closeDialog" icon text>
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text>
            <v-alert type="error" v-if="error != ''">
                {{error}}
            </v-alert>
            <v-autocomplete return-object label="ภูมิภาค" outlined dense v-model="geoChoose" :items="geo" item-text="name"></v-autocomplete>
            <v-autocomplete return-object label="จังหวัด" outlined dense v-model="provinceChoose" :items="province" item-text="name"></v-autocomplete>
            <v-autocomplete return-object label="อำเภอ" outlined dense v-model="amphurChoose" :items="amphur" item-text="name"></v-autocomplete>
            <v-autocomplete return-object label="ตำบล" outlined dense v-model="districtChoose" :items="district" item-text="name"></v-autocomplete>
            <!-- <button @click="submitCity()" :class="'bg-blue-800 '+$btn"> {{ $rt }}</button> -->
            <v-btn @click="submitCity()" dark color="primary" class="w-full" large rounded>OK</v-btn>

        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script lang="ts">
import {
    Component,
    Watch,
    Vue,
} from 'vue-property-decorator';
import {
    mapState
} from 'vuex';
import {
    City
} from '@/vuexes/city'
@Component({
    components: {},
    computed: {}
})
export default class CityComponent extends Vue {
    private response: boolean = false
    private geo: any[] | null = []
    private province: any[] | null = []
    private amphur: any[] | null = []
    private district: any[] | null = []
    private geoChoose: any | null = null
    private provinceChoose: any | null = null
    private amphurChoose: any | null = null
    private districtChoose: any | null = null
    error: any = ""
    @Watch('geoChoose')
    private async onChangeGeo(id: any) {
        this.error = ""
        this.province = await City.getProvince(id.id)
        this.amphur = null
        this.district = null
    }
    @Watch('provinceChoose')
    async onChangeProvince(id: any) {
        this.error = ""
        this.amphur = await City.getAmphur(id.id)
        this.district = null
        this.districtChoose = {}
    }
    @Watch('amphurChoose')
    async onChangeAmphur(id: any) {
        this.error = ""
        this.district = await City.getDistrict(id.id)
        this.districtChoose = {}
    }
    public async submitCity() {
        this.error = ""
        if (this.province && this.geo && this.amphur && this.district && this.districtChoose.id) {
            City.currentGeo = this.geoChoose
            City.currentProvince = this.provinceChoose
            City.currentAmphur = this.amphurChoose
            City.currentDistrict = this.districtChoose
            await City.setShowName()
            City.dialogCityState = false
            await this.clearForm()
        } else {
            this.error = "Field is required"
        }
    }

    private async clearProvince() {
        this.provinceChoose = {}
    }
    private async clearAmphur() {
        this.amphurChoose = {}
    }
    private async clearDistrict() {
        this.districtChoose = {}
    }
    private async clearForm() {
      this.geoChoose = {}
        this.provinceChoose = {}
        this.amphurChoose = {}
        this.districtChoose = {}
    }
    private async mounted() {
        this.geo = await City.getGeo()
        this.response = true
    }
    get dialog() {
        return City.dialogCityState
    }
    async closeDialog() {
        this.error = ''
        await this.clearForm()
        City.dialogCityState = false
    }
}
</script>
