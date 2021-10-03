<template>
	<div class="container">
	<div class="row">
		<div class="alert alert-danger mt-5" role="alert" v-if="error" data-test="error">
			{{error}}
		</div>
		<div v-if="!loadedGame" class="mt-5" data-test="loading" style="color:white">Loading...</div>
		<div v-if="loadedGame" class="gameDetail col-12 mb-3 mt-5">
		<div class="card" style="width: 100%">
			<div class="card-body">
			<h5 class="card-title" style="text-transform:capitalize">{{loadedGame.name}}</h5>
			<p class="card-text">{{loadedGame.description}}</p>
			<div class="d-grid gap-2 d-flex justify-content-md-end">
				<a href="#" class="btn btn-danger" @click="uninstall(loadedGame)">Uninstall</a>
				<a href="#" class="btn btn-primary" v-if="installed" @click="play(loadedGame)">Play</a>
			</div>
			</div>
		</div>
		</div>
		
	</div>
	</div>
</template>

<script>
import axios from 'axios'
export default({
	name: "game",
	props: ['game'],
	data(){
		return {
			error: false,
			loadedGame: false,
			installed: true
		}
	},
	mounted() {
		axios.get('api/game?name='+ this.game)
			.then((response)=>{
				this.loadedGame = response.data[0]
			})
			.catch((error)=> {
				this.error = error
			})
	},
	methods: {
		uninstall(game){
			this.installed = false
			console.log('uninstall',game)
		},
		play(game){
			console.log('play',game)
		}
	}
});
</script>