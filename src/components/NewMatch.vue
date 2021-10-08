<template>
    <ProgressBar mode="indeterminate" style="height: .5em" v-if="loading"></ProgressBar>
    <Card v-if="match">
        <template #title>
            <div class="d-flex justify-content-between">
                <h3>Padel match: {{formatDate(match.date)}}</h3>
                <div v-if="locale === 'it'" class="clickable p-2 flag it" @click="changeLanguage">IT</div>
                <div v-else class="clickable p-2 flag en" @click="changeLanguage">EN</div>
            </div>
        </template>
        <template #content>
            <form @submit.prevent="updateMatch">
                <div class="row">
                    <div class="col-12 text-start">
                        <label for="date" class="form-label">{{$t('message.dataPartita')}}</label>
                        <input  name="date" type="date" v-model="formattedDate" class="form-control">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-5 text-start">
                        <div class="mb-2">
                            <label for="giocatore1" class="form-label">{{$t('message.giocatore')}}</label>
                            <select  name="giocatore1" class="form-select" v-model="match.team1[0]">
                                <option v-for="player in players" :value="player.id" :key="player.id">{{player.name}}</option>
                            </select>
                        </div>
                        <div>
                            <label for="giocatore2" class="form-label">{{$t('message.giocatore')}}</label>
                            <select  name="giocatore2" class="form-select" v-model="match.team1[1]">
                                <option v-for="player in players" :value="player.id" :key="player.id">{{player.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-2 text-center d-flex align-items-center justify-content-center">
                        vs
                    </div>
                    <div class="col-5 text-start">
                        <div class="mb-2">
                            <label for="giocatore3" class="form-label">{{$t('message.giocatore')}}</label>
                            <select  name="giocatore3" class="form-select" v-model="match.team2[0]">
                                <option v-for="player in players" :value="player.id" :key="player.id">{{player.name}}</option>
                            </select>
                        </div>
                        <div>
                            <label for="giocatore4" class="form-label">{{$t('message.giocatore')}}</label>
                            <select  name="giocatore4" class="form-select" v-model="match.team2[1]">
                                <option v-for="player in players" :value="player.id" :key="player.id">{{player.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                     <div class="col-12 text-start">
                        <label for="note" class="form-label">{{$t('message.notePartita')}}</label>
                        <textarea name="note" class="form-control" v-model="match.notes"  rows="3"></textarea>
                    </div>
                </div>
            </form>
        </template>
        <template #footer>
            <Button icon="pi pi-check" @click="saveMatch" :label="$t('message.save')" />
        </template>
    </Card>
    <div v-else>{{$t('message.selectMatch')}}</div>
      
</template>

<script>
import * as dayjs from 'dayjs'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

export default {
	name: 'match',
    props: ['id'],
    components: {Button,Card,ProgressBar},
    data(){
        return {
            match: {team1:[],team2:[]},
            loading: false
        }
    },
    computed: {
        players(){
            return this.$store.state.players.filter((item) => item.role === 'player')
        },
        locale(){
            return this.$store.state.locale
        },
        formattedDate(){
            return dayjs(this.match.date).format('DD/MM/YYYY')
        }
    },
    mounted(){

    },
    methods: {
        formatDate(date){
            return dayjs(date).format('DD/MM/YYYY hh:mm')
        },

        changeLanguage(){
            this.$store.commit('setLocale', this.$store.state.locale === 'it' ? 'en' : 'it')
            this.$i18n.locale = this.$store.state.locale
        },
        saveMatch(){
            this.axios.put('matches?id='+this.id,this.match).then((response)=>{
                console.log(response)
            }).catch(error=> console.log(error))
        }
    }
}
</script>

<style>
.clickable{
    cursor: pointer;
}
.clickable:hover {
    background-color: #ccc;
    color: black;
}
</style>