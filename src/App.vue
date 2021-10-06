<template>
<div class="p-grid p-m-0 p-nested-grid p-flex p-flex-column p-jc-between" style="height: 100%;">
	<div class="p-col-12">
    <div class="p-grid">
      <ListaOggetti ></ListaOggetti>
    </div>
  </div>
	<div class="p-col-12">
    <Carrello></Carrello>
  </div>
</div>
  
</template>

<script>
import ListaOggetti from '@/components/ListaOggetti'
import Carrello from '@/components/Carrello'

export default {
  name: 'App',
  components: {
    ListaOggetti,
    Carrello
  }
}
</script>

<style lang="scss">
html, body {
	width: 100%;
	height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  background-color: #ccc;
}
</style>
