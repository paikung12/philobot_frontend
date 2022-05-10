<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Robot Trade</span>
        <div class="flex justify-end">
            <div class="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
                <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active" id="grid">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                    
                    <span>List</span>
                </button>
                <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2" id="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                    <span>Grid</span>
                </button>
            </div>
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
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
            <template v-slot:item.iron="{ item }">
                <div>
                    <v-btn elevation="2" outlined small color="error">Profit Test</v-btn>
                    <v-btn elevation="2" outlined small color="success">Use Robot</v-btn>
                </div>
            </template>

        </v-data-table>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            headers: [{
                    text: 'Robot Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Profit',
                    value: 'calories'
                },
                {
                    text: 'Risk ',
                    value: 'fat'
                },
                {
                    text: 'User',
                    value: 'carbs'
                },
                {
                    text: 'Date ',
                    value: 'protein'
                },
                {
                    text: 'Pair of coins ',
                    value: 'coins'
                },
                {
                    text: 'Actions ',
                    value: 'iron'
                },
            ],
            desserts: [{
                    name: 'Reblance',
                    calories: '+15%',
                    fat: '-3%',
                    carbs: 24,
                    protein: '2022-05-3',
                    coins: 'BTC,DOGE',
                },
                {
                    name: 'Reblance',
                    calories: '+15%',
                    fat: '-3%',
                    carbs: 37,
                    protein: '2022-05-3',
                    coins: 'BTC,DOGE',
                },
                {
                    name: 'Reblance',
                    calories: '+15%',
                    fat: '-3%',
                    carbs: 23,
                    protein: '2022-05-3',
                    coins: 'BTC,DOGE',
                },
                {
                    name: 'Reblance',
                    calories: '+15%',
                    fat: '-3%',
                    carbs: 67,
                    protein: '2022-05-3',
                    coins: 'BTC,DOGE',
                },
                {
                    name: 'Reblance',
                    calories: '+15%',
                    fat: '-3%',
                    carbs: 49,
                    protein: '2022-05-3',
                    coins: 'BTC,DOGE',
                },
            ],
        }
    },
}
</script>

<style>
/*@apply bg-white text-blue-400 rounded-full;*/
.active {
    background: white;
    border-radius: 9999px;
    color: #4ade80;
}
</style>
