<template>
<div>
    <div>
        
    </div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Earn up to 10% from your friends</span>
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
    <div class="flex flex-wrap overflow-hidden sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-px">

        <div class="w-full sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-px xl:px-px xl:w-2/3">
            <div class="m-4 rounded-lg border-2 border-gray-200 flex justify-between items-center mt-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-gray-500 ml-2">
                    <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                    <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                </svg>

                <input class="w-full outline-none bg-transparent" type="text" placeholder="link" value="https://boxicons.com/?query=link">

                <button class="bg-green-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-green-600">
                    Copy
                </button>
            </div>
        </div>

        <div class="w-full   sm:my-px sm:px-px sm:w-full md:my-px md:px-px md:w-full lg:my-px lg:px-px lg:w-full xl:my-px xl:px-px xl:w-1/3">
            <div>
                <div class=" m-6 relative">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMG3yglIzWddpd0S2Gy_d6O69vNxvV-dA41A&usqp=CAU'" class="w-8 h-8     hover:scale-125 rounded-full border-2 border-white bg-[#f6efff] float-left absolute">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMG3yglIzWddpd0S2Gy_d6O69vNxvV-dA41A&usqp=CAU" class="w-8 h-8    hover:scale-125  rounded-full border-2 border-white bg-[#f6efff]  float-left absolute left-[24px]">
                    <img src="https://w7.pngwing.com/pngs/246/366/png-transparent-computer-icons-avatar-user-profile-man-avatars-logo-monochrome-black-thumbnail.png" class="w-8 h-8    hover:scale-125  rounded-full  border-2 border-white bg-[#f6efff] float-left absolute left-[48px]">
                    <img src="https://w7.pngwing.com/pngs/246/366/png-transparent-computer-icons-avatar-user-profile-man-avatars-logo-monochrome-black-thumbnail.png" class="w-8 h-8   hover:scale-125  rounded-full  border-2 border-white bg-[#f6efff] float-left absolute left-[72px]">
                    <button class="min-w-8 bg-green-500 text-white rounded-full border-2 float-left absolute left-[96px] py-[3px] px-2">478</button>
                </div>
            </div>
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
