<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Quest</span>
        <div class="flex justify-end">
            <v-tooltip color="#4ade80" top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="#4ade80">
                            mdi-alert-circle-outline
                        </v-icon>
                    </v-btn>
                </template>
                <span>Programmatic tooltip</span>
            </v-tooltip>
        </div>
    </v-card-title>
    <div class="flex flex-wrap -mt-4  sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-1">
        <div class="w-full  sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-full">
            <div class="w-full sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-px xl:px-px xl:w-full">
                <div class="m-4 rounded-lg border-2 border-gray-200 flex justify-between items-center mt-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-gray-500 ml-2">
                        <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                        <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                    </svg>
                    Invite 20 friends and get 200 baht.
                    <button class="bg-green-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-green-600">
                        Accept
                    </button>
                </div>
            </div>
            <div class="w-full sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-px xl:px-px xl:w-full">
                <div class="m-4 rounded-lg border-2 border-gray-200 flex justify-between items-center mt-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-gray-500 ml-2">
                        <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                        <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                    </svg>
                    15 active friends get 300 baht
                    <button class="bg-green-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-green-600">
                        Accept
                    </button>
                </div>
            </div>
            <v-pagination :length="3" circle small></v-pagination>
        </div>
        <div class="w-full overflow-hidden sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-1 xl:px-1 xl:w-full">
            <v-card-title>
                <span class="text-h6 font-weight-light">Notification Quest</span>
                <div class="flex justify-end">
                    <v-tooltip color="#4ade80" top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon color="#4ade80">
                                    mdi-alert-circle-outline
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Programmatic tooltip</span>
                    </v-tooltip>
                </div>
            </v-card-title>

            <div class="m-3 p-3 -mt-3 border-gray-100 border-2 rounded-lg  ">
                <v-alert dense text type="success">
                    Congratulations, you have 1 more friend.
                </v-alert>
                <v-alert dense text type="success">

                    Congratulations , you have received 200 baht.
                </v-alert>
                <v-alert dense text type="success">

                    Congratulations, you have 1 more friend.
                </v-alert>
            </div>
            <v-pagination :length="3" circle small></v-pagination>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
