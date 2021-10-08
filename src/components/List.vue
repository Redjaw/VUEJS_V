<template>
        <div class="row h-100">
            <div class="col-3" style="position:relative">
                <Button icon="pi pi-plus" class="p-button-rounded p-button-primary" @click="newPage"/>
                <Listbox v-model="selectedMatch" :options="matches" :filter="true" filterPlaceholder="Search" class="h-100">
                    <template #option="slotProps">
                        <div class="country-item">
                            <router-link v-if="slotProps.option.id" :to="slotProps.option.id">
                                <div>{{formatDate(slotProps.option.date)}}</div>
                            </router-link>
                            <div v-else>{{formatDate(slotProps.option.date)}}</div>
                        </div>
                    </template>
                </Listbox>
            </div>
            <div class="col text-center">
                <router-view></router-view>
            </div>
        </div>
</template>

<script>
import Listbox from 'primevue/listbox'
import * as dayjs from 'dayjs'
import Button from 'primevue/button';

export default {
	name: 'list',
    data(){
        return {
            selectedMatch: undefined,
            matches: []
        }
    },
    components:{Listbox,Button},
    mounted(){
        this.axios.get('matches').then((response)=>{
            this.matches = response.data
        })
    },
    computed:{
        test() {
            return this.$store.state.count
        }},
    methods: {
        formatDate(date){
            return dayjs(date).format('DD/MM/YYYY hh:mm')
        },
        newPage(){
            this.$router.push('/new-match')
        }
    }
}
</script>
<style>
.p-button-rounded{
    position:absolute;
    right: 0;
    z-index: 1000;
}
</style>