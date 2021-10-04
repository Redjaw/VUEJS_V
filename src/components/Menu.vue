<template>
	<Listbox @change="scegliPizza" v-model="pizza" :options="pizze">
		<template #option="slotProps">
			<div class="p-d-flex p-jc-between"><span>{{slotProps.option.name}}</span><span>{{slotProps.option.price}}</span></div>
		</template>
	</Listbox>
</template>

<script>
import pizzeJson from '@/assets/pizze.json'

export default ({
  name: "my-menu",
  emits: ['pizzaSelezionata'],
  data(){
	return {
		pizze: pizzeJson.pizze,
		pizza: ""
	}
  },
  methods: {
	scegliPizza(){
		this.$emit('pizzaSelezionata',this.pizza)
	}
  }
});
</script>
