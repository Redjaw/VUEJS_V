<template>
  <Toolbar>
      <template #left>
          <span>Totale oggetti nel carrello: {{countCarrello}}</span>
      </template>

      <template #right>
          <span>Prezzo: {{getPrice}} €</span>
      </template>
  </Toolbar>
</template>

<script>
import {mapGetters} from 'vuex'
import Toolbar from 'primevue/toolbar'
export default ({
  components: {Toolbar},
  name: "Carrello",
  computed: {
    ...mapGetters([
      'countCarrello',
      'getPrice'
    ])
  }
});
</script>

<style lang="scss" scoped>
  span {
    color: white
  }
</style>