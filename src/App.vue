<template>
  <div class="p-grid">
    <div class="p-col-4">
      <MyMenu @pizza-selezionata="aggiornaPizza"/>
    </div>
    <div class="p-col">
      <DettaglioPizza :pizza="pizzaSelezionata"/>
    </div>
  </div>
</template>

<script>
import MyMenu from '@/components/Menu.vue'
import DettaglioPizza from '@/components/DettaglioPizza.vue'

export default {
  name: 'App',
  components: {
    DettaglioPizza,
    MyMenu
  },
  data() {
    return {
      pizzaSelezionata: false
    }
  },
  methods: {
    aggiornaPizza(pizza){
      this.pizzaSelezionata = pizza
    }
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
