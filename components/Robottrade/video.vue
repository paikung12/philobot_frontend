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
        <div class=" w-60 rounded p-2">
            <div class="ml-4">
                <div class="group relative ">
                    <img alt="Placeholder" class="block h-48 w-full rounded" src="https://cdn.dribbble.com/users/728794/screenshots/6383413/r1.gif">
                    <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 duration-700 transition justify-evenly">
                        <button class="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="p-2">
                    <h3 class=" text-green-400 py-1 text-lg justify-start">Let us help you build a robot for you.</h3>
                    <p class="text-gray-400 text-xs">
                        Bitbangkok Academy
                        2.7k views 3 months ago</p>
                </div>
            </div>
        </div>
    </div>
    <div class="m-4 mt-1">
        <v-divider></v-divider>
    </div>
    <div class="m-4 mt-8 ">
        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                <div class="flex items-center">
                    <!-- <v-img class="rounded-lg  w-20 h-20" src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif" /> -->
                    <div class="group relative ">
                        <img alt="Placeholder" class=" w-21 h-20 rounded-lg " src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif">
                        <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 duration-700 transition justify-evenly">
                            <button class="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                <div class=" flex flex-col break-words textellipsis ">
                    <span class="text-xs text-left">
                        Consultation process to create
                    </span>
                    <span class=" text-left pt-2 font-light text-gray-400 text-xs ">
                        Bitbangkok Academy
                        2.7k views 3 months ago
                    </span>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                <div class="flex items-center">
                    <!-- <v-img class="rounded-lg  w-20 h-20" src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif" /> -->
                    <div class="group relative ">
                        <img alt="Placeholder" class=" w-21 h-20 rounded-lg " src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif">
                        <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 duration-700 transition justify-evenly">
                            <button class="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                <div class=" flex flex-col break-words textellipsis ">
                    <span class="text-xs text-left">
                        Consultation process to create
                    </span>
                    <span class=" text-left pt-2 font-light text-gray-400 text-xs ">
                        Bitbangkok Academy
                        2.7k views 3 months ago
                    </span>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                <div class="flex items-center">
                    <!-- <v-img class="rounded-lg  w-20 h-20" src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif" /> -->
                    <div class="group relative ">
                        <img alt="Placeholder" class=" w-21 h-20 rounded-lg " src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif">
                        <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 duration-700 transition justify-evenly">
                            <button class="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                <div class=" flex flex-col break-words textellipsis ">
                    <span class="text-xs text-left">
                        Consultation process to create
                    </span>
                    <span class=" text-left pt-2 font-light text-gray-400 text-xs ">
                        Bitbangkok Academy
                        2.7k views 3 months ago
                    </span>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-2/5">
                <div class="flex items-center">
                    <!-- <v-img class="rounded-lg  w-20 h-20" src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif" /> -->
                    <div class="group relative ">
                        <img alt="Placeholder" class=" w-21 h-20 rounded-lg " src="https://i.pinimg.com/originals/41/53/7d/41537d55a8ab360ad9300060579a8287.gif">
                        <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 duration-700 transition justify-evenly">
                            <button class="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-full xl:my-1 xl:px-1 xl:w-3/5">
                <div class=" flex flex-col break-words textellipsis ">
                    <span class="text-xs text-left">
                        Consultation process to create
                    </span>
                    <span class=" text-left pt-2 font-light text-gray-400 text-xs ">
                        Bitbangkok Academy
                        2.7k views 3 months ago
                    </span>
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
