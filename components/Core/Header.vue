<template>
  <div class="bg-green-400 rounded-xl md:overflow-hidden">
                <div class="px-4 py-16">
                    <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                        <p class="font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight md-6">
                            {{head}}
                        </p>

                        <p class="text-white md:text-xl md:px-18">
                           {{text}}
                        </p>

                        <div class="hidden md:block h-5 w-5 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"></div>
                        <div class="text-center mb-10 mt-10">
                            <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                        </div>

                    </div>

                </div>

                <svg class="fill-current bg-green-400 text-white hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>
</template>

<script>
export default {
    props:{
        head:{
            default:"EDIT ACCOUNT , PASSWORD AND KYC"
        },
        text:{
            default : 'Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in'
        }
    }
}
</script>

<style>

</style>