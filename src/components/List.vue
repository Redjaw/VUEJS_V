<template>
<div class="container">
  <div class="row">
    <div class="alert alert-danger mt-5" role="alert" v-if="error" data-test="error">
			{{error}}
		</div>
    <div class="col-3 mb-3 mt-5" v-for="game in games" :key="game.name" data-test="game">
      <div class="card" style="width: 100%">
        <img class="card-img-top" :src="require('@/assets/games/'+game.cover)">
        <div class="card-body">
          <h5 class="card-title" style="text-transform:capitalize">{{game.name}}</h5>
          <p class="card-text">{{game.description}}</p>
          <div class="d-flex justify-content-md-end">
            <a href="#" class="btn btn-primary" @click="playTheGame(game)">Play</a>
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
  name: "list",
  data() {
    return {
      games : [],
      error: false
    }
  },
  mounted() {
    axios.get('api/gameslist')
    .then((response) => this.games = response.data)
    .catch((error)=>this.error = error)
  },
  methods: {
    playTheGame(game){
      this.$router.push({"name":"game","params": {"game":game.id}})
    }
  }
});
</script>

<style lang="scss" scoped>
.card-text {
  height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>