<template>
	<DettaglioOggetto class="p-col-3" v-for="item in items" :key="item.id" :item="item" />	
</template>

<script>

import itemsJson from '@/assets/items.json'
import DettaglioOggetto from '@/components/DettaglioOggetto.vue'

export default ({
  name: "lista-oggetti",
  components: {DettaglioOggetto},
  data() {
	return{
		items : itemsJson.items
	}
  }
});
</script>