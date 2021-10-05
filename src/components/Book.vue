<template>
	<div class="btn btn-primary" @click="goBack">Back</div>
	<div v-if="bookDetails[0]">
		<h1>{{bookDetails[0].name}}</h1>
		<h2>{{bookDetails[0].author}}</h2>
		<p>{{bookDetails[0].plot}}</p>
		<router-view />
	</div>
</template>

<script>
import booksJson from '@/assets/books.json'

export default ({
  name: "book",
  props: ['id'],
  data() {
	return {
		bookDetails: {}
	}
  },
  mounted() {
	this.bookDetails = booksJson.books.filter(item => item.isin === this.id)
  },
  methods: {
	goBack(){
		this.$router.push({name:'library'})
	}
  }
});
</script>