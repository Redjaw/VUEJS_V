<template>
<div class="p-col-3">
	<Card style="height:320px" class="p-d-flex p-flex-column">
			<template #title>
				{{item.name}}
			</template>
			<template #content>
				<p>{{item.description}}</p>
			</template>
      <template #footer>
        <div class="p-d-flex p-jc-end">
          <Button v-if="isItemInCart(item.id)" icon="pi pi-times" label="Rimuovi dal carrello" @click="removeFromCart" class="p-button-secondary" />
          <Button v-else icon="pi pi-shopping-cart" label="Aggiungi al carrello" @click="addToCart"/>
        </div>
    </template>
		</Card>
    </div>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'
import { mapGetters } from 'vuex';

export default ({
  name: "dettaglio-oggetto",
  components: {Button,Card},
  props: ['item'],
  methods: {
    addToCart(){
      this.$store.dispatch('addToCart',this.item)
    },
    removeFromCart(){
      this.$store.dispatch('removeFromCart',this.item)
    }
  },
  mounted(){
    console.log(this.$store)
  },
  computed: {
    ...mapGetters([
      'isItemInCart'
    ])
  }
});
</script>

<style lang="scss" >
  .p-card-body{
    flex: 1;
    display: flex;
    flex-direction: column;
    .p-card-content {
      flex: 1;
    }
  }
</style>