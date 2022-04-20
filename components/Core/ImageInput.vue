<template>
<div>

    <v-btn small text @click="dialogFile = true" color="success">
        <v-icon>mdi-file-image-plus-outline</v-icon><span class="ml-1 capitalize font-semibold text-sm">Upload Picture</span>
    </v-btn>

    <v-dialog v-if="dialogFile" v-model="dialogFile" persistent scrollable max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title> Upload Picture
                <v-spacer></v-spacer>
                <v-btn @click="closeDialog()" icon color="error">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <div v-if="step == 1">
                    <div class="p-20">
                        <center>
                            <img src="~/static/png/2659360.png" alt="">
                            <input class="hidden" ref="pictureInput2" accept="image/jpeg,image/png" @change="changeImage2" type="file" name="" id="">
                            <br>
                            <v-btn @click="$refs.pictureInput2.click()" color="success">Select Image</v-btn>
                        </center>
                    </div> 
                </div>

                <div v-if="step == 2">
                    <!-- <div v-html="canvas"></div> -->
                    <cropper class="cropper" :src="image" :stencil-props="{
              aspectRatio: 10 / 12,
            }" @change="ready"></cropper>
                    <br>
                    <center>
                        <v-btn large block @click="callbackImage()" color="success">
                            <v-icon>mdi-content-save</v-icon><span class="capitalize font-semibold text-base">Upload Picture</span>
                        </v-btn>

                    </center>
                </div>
            </v-card-text>

        </v-card>
    </v-dialog>
</div>
</template>

<script>
import PictureInput from "vue-picture-input";
import {
    Cropper
} from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import {
    Core
} from '~/vuexes/core'
export default {
    components: {
        PictureInput,
        Cropper,
    },
    data() {
        return {
            dialogFile: false,
            image: "",
            step: 1,
            canvas: {},
            data: {},
            file: {},
        };
    },
    methods: {
        async changeImage2() {
            console.log(this.$refs.pictureInput2.files[0]);
            let data = await Core.getBase64(this.$refs.pictureInput2.files[0]);
            this.image = data;
            this.step = 2;
        },
        async changeImage(val) {
            console.log(this.$refs.pictureInput.file);
            this.image = val;
            this.step = 2;
        },
        change({
            coordinates,
            canvas
        }) {
            console.log(coordinates, canvas);
            this.canvas = coordinates;
        },
        async ready(val) {
            console.log(val);
            let canvas = val.canvas;
            var url = canvas.toDataURL();
            this.file = await Core.dataURLtoFile(url);
            console.log(this.file);
        },

        async callbackImage() {
            this.step = 1
            this.dialogFile = false;
            await this.$emit('profileImage', this.file)
        },
        async closeDialog() {
            this.step = 1
            this.dialogFile = false;

        }
    },
};
</script>

<style>
</style>
