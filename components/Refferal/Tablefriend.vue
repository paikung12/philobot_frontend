<template>
<div>
    <v-card-title>
        <span class="text-h6 font-weight-light">Robot Trade</span>
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
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
            <template v-slot:item.iron="{ item }">
                <div>
                    <v-btn elevation="2" outlined small color="error">Delete</v-btn>
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
