<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Video</span>
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
    <div>
        <v-img class="rounded-2xl " width="100%" height="200" src="https://cdn.dribbble.com/users/77598/screenshots/16399264/media/d86ceb1ad552398787fb76f343080aa6.gif" />
        <div class="p-5">
            <h1 class="text-2xl   py-2">Lorem ipsum dolor sit amet</h1>
            <p class="bg-white text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae qui distinctio ex soluta? Voluptates, ea! Esse, natus. Quas possimus laboriosam consectetur deserunt ea sapiente.</p>
        </div>
    </div>
    <div class="">
        <div class="my-5 px-1 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-2 lg:px-2 lg:w-full xl:my-3 xl:px-3  grid grid-cols-4 gap-3">
            <div class="flex items-center">
                <v-img class="rounded-2xl "  src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif" />
            </div>
            <div class="col-span-3 flex flex-col">
                <span class="font-bold text-lg pt-3">
                    Go (Golang) with Structs and Interfaces
                </span>
                <span class="font-light text-sm pt-2">
                    Although it would be possible for us to write
                </span>
            </div>
        </div>
         <div class="my-5 px-1 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-2 lg:px-2 lg:w-full xl:my-3 xl:px-3  grid grid-cols-4 gap-3">
            <div class="flex items-center">
                <v-img class="rounded-2xl "  src="https://cdn.dribbble.com/users/287797/screenshots/3366795/robot.gif" />
            </div>
            <div class="col-span-3 flex flex-col">
                <span class="font-bold text-lg pt-3">
                    Go (Golang) with Structs and Interfaces
                </span>
                <span class="font-light text-sm pt-2">
                    Although it would be possible for us to write
                </span>
            </div>
        </div>
         <div class="my-5 px-1 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-2 lg:px-2 lg:w-full xl:my-3 xl:px-3  grid grid-cols-4 gap-3">
            <div class="flex items-center">
                <v-img class="rounded-2xl "  src="https://www.geelongtechschool.vic.edu.au/wp-content/uploads/2021/11/robot_dribble.gif" />
            </div>
            <div class="col-span-3 flex flex-col">
                <span class="font-bold text-lg pt-3">
                    Go (Golang) with Structs and Interfaces
                </span>
                <span class="font-light text-sm pt-2">
                    Although it would be possible for us to write
                </span>
            </div>
        </div>
        <div class="my-5 px-1 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-2 lg:px-2 lg:w-full xl:my-3 xl:px-3  grid grid-cols-4 gap-3">
            <div class="flex items-center">
                <v-img class="rounded-2xl "  src="https://media.hitrecord.org/derivations/image/preserve/730/eyJpZCI6Im9yaWdpbmFscy9pbWFnZXMvMzYwMDcyNy9hdHRhY2htZW50L3NtYWxsLW0tZGFuaWVsLWdtYWlsLWNvbS0zNjAwNzI3LmdpZiIsInN0b3JhZ2UiOiJzdG9yZSJ9?version=4&signature=4f3624b4fcc3cf6e3e5cf5168aa1a90c4ada73659fb028eaea41d9f7d81fb029" />
            </div>
            <div class="col-span-3 flex flex-col">
                <span class="font-bold text-lg pt-3">
                    Go (Golang) with Structs and Interfaces
                </span>
                <span class="font-light text-sm pt-2">
                    Although it would be possible for us to write
                </span>
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
