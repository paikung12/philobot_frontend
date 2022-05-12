<template>
<div>
    <div class="flex items-center justify-center"> 
        <div class="container mx-auto px-4 sm:px-8 max-w-3xl">

             

            <div class="main-question mb-8 flex flex-col divide-y text-gray-800 text-base">
                <div class="item px-6 py-6" x-data="{isOpen : false}">
                    <a href="#" class="flex items-center justify-between" @click.prevent="isOpen = true">
                        <h4 :class="{'text-blue-600 font-bold' : isOpen == true}">Popular articles</h4>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <div x-show="isOpen"  class="mt-3" :class="{'text-gray-600' : isOpen == true}">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                    </div>
                </div>

                <div class="item px-6 py-6" x-data="{isOpen : false}">
                    <a href="#" class="flex items-center justify-between" @click.prevent="isOpen = true">
                        <h4 :class="{'text-blue-600 font-bold' : isOpen == true}">Fix problems & request removals</h4>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <div x-show="isOpen"   class="mt-3" :class="{'text-gray-600' : isOpen == true}">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                    </div>
                </div>

                <div class="item px-6 py-6" x-data="{isOpen : false}">
                    <a href="#" class="flex items-center justify-between" @click.prevent="isOpen = true">
                        <h4 :class="{'text-blue-600 font-bold' : isOpen == true}">Browse the web</h4>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <div x-show="isOpen"   class="mt-3" :class="{'text-gray-600' : isOpen == true}">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                    </div>
                </div>

                <div class="item px-6 py-6" x-data="{isOpen : false}">
                    <a href="#" class="flex items-center justify-between" @click.prevent="isOpen = true">
                        <h4 :class="{'text-blue-600 font-bold' : isOpen == true}">Search on your phone or tablet</h4>
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <div x-show="isOpen"   class="mt-3" :class="{'text-gray-600' : isOpen == true}">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                    </div>
                </div>
            </div>

            <div class="main-images mb-8 ">
                <div class="images grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="image bg-white rounded-lg shadow-lg overflow-hidden">
                        <a href="#">
                            <img src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg" alt="Contact with Customer support" title="Contact with Customer support">
                            <span class="text-center p-2 text-gray-700 text-sm inline-block w-full">Customer support</span>
                        </a>
                    </div>

                    <div class="image bg-white rounded-lg shadow-lg overflow-hidden">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a" alt="Send massage to support disk" title="Send massage to support disk">
                            <span class="text-center p-2 text-gray-700 text-sm inline-block w-full">Send massage</span>
                        </a>
                    </div>

                    <div class="image bg-white rounded-lg shadow-lg overflow-hidden">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3" alt="Write your feedback" title="Write your feedback">
                            <span class="text-center p-2 text-gray-700 text-sm inline-block w-full">Write feedback</span>
                        </a>
                    </div>
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
