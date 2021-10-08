<template>
  <div class="container h-100">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mounted(){
    //ARBITRO
    this.$store.commit('setCurrentUser', 'c79fdf47-8810-487a-9716-8f30ff6e63a8')

    //GIOCATORE DAVIDE VERNASSA
    //this.$store.commit('setCurrentUser', '516715cb-f18f-4cd0-8b67-82b13425ee21')

    this.axios.get('players').then((response)=>{
      this.$store.commit('setPlayers',response.data)
    })
  }
}
</script>

<style>
html, body {
	width: 100%;
	height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
