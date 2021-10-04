<template>
        <Card v-if="pizza">
            <template #header>
                <img alt="user header" :src="require('@/assets/pizze/'+pizza.label+'.png')">
            </template>
            <template #title>
                <span style="text-transform:capitalize">{{pizza.name}}</span>
            </template>
            <template #content>
                <div>
                    <Chip v-for="(ingrediente, index) in pizza.ingredients" :key="index" :label="ingrediente" class="p-mr-1"></Chip>
                </div>
                <Commenti :commenti="pizza.comments"></Commenti>
            </template>
        </Card>
        
</template>

<script>
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import Commenti from '@/components/Commenti.vue'

export default ({
  name: "dettaglio-pizza",
  components: {Card,Chip,Commenti},
  props: {
      pizza: Object
  },
  data(){
	return {
		
	}
  }
});
</script>

<style>
    .p-card-header img{
        width: auto;
    }
</style>
