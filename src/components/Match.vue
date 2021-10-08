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
                        <input :disabled="notAllowed()" name="date" type="date" v-model="formattedDate" class="form-control">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-5 text-start">
                        <div class="mb-2">
                            <label for="giocatore1" class="form-label">{{$t('message.giocatore')}}</label>
                            <select :disabled="notAllowed()" name="giocatore1" class="form-select" v-model="match.team1[0]">
                                <option v-for="player in players" :value="player.id" :key="player.id">{{player.name}}</option>
                            </select>
                        </div>
                        <div>
                            <label for="giocatore2" class="form-label">{{$t('message.giocatore')}}</label>
                            <select :disabled="notAllowed()" name="giocatore2" class="form-select" v-model="match.team1[1]">
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
                            <select :disabled="notAllowed()" name="giocatore3" class="form-select" v-model="match.team2[0]">
                                <option v-for="player in players" :value="player.id" :key="player.id">{{player.name}}</option>
                            </select>
                        </div>
                        <div>
                            <label for="giocatore4" class="form-label">{{$t('message.giocatore')}}</label>
                            <select :disabled="notAllowed()" name="giocatore4" class="form-select" v-model="match.team2[1]">
                                <option v-for="player in players" :value="player.id" :key="player.id">{{player.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <span v-for="(set,index) in match.score" :key="index">
                        <span>{{set[0]}}</span>-<span>{{set[1]}}</span>
                    </span>
                </div>
                <div class="row mt-3">
                     <div class="col-12 text-start">
                        <label for="note" class="form-label">{{$t('message.notePartita')}}</label>
                        <textarea :disabled="notesNotAllowed()" name="note" class="form-control" v-model="match.notes"  rows="3"></textarea>
                    </div>
                </div>
            </form>
        </template>
        <template #footer v-if="!notesNotAllowed()">
            <Button icon="pi pi-check" @click="updateMatch" :label="$t('message.update')" />
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
            match: undefined,
            loading: true
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
        this.axios.get('matches',{params:{id:this.id}}).then((response)=>{
                this.match = response.data[0]
                this.loading=false
            }).catch((error)=>console.log(error)).then(()=>{})
    },
    updated(){
        if(!this.match || this.match.id !== this.id){
            this.loading = true
            this.axios.get('matches',{params:{id:this.id}}).then((response)=>{
                this.match = response.data[0]
                this.loading=false
            }).catch((error)=>console.log(error)).then(()=>{this.loading=false})
        }
    },
    methods: {
        formatDate(date){
            return dayjs(date).format('DD/MM/YYYY hh:mm')
        },
        notAllowed(){
            return this.players.filter((item)=>item.id===this.$store.state.currentUser).length > 0 ? true : false
        },
        notesNotAllowed(){
            if(this.match.team1.includes(this.$store.state.currentUser)) return false
            if(this.match.team2.includes(this.$store.state.currentUser)) return false
            return this.players.filter((item)=>item.id===this.$store.state.currentUser).length > 0 ? true : false
        },
        changeLanguage(){
            this.$store.commit('setLocale', this.$store.state.locale === 'it' ? 'en' : 'it')
            this.$i18n.locale = this.$store.state.locale
        },
        updateMatch(){
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