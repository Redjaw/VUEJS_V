<template>
	<ul class="list-group">
		<li v-for="(book, index) in history" :key="index" class="list-group-item">
			{{book.user}} -- {{book.dateOut}}
		</li>
	</ul>
</template>

<script>
import booksJson from '@/assets/books.json'
export default ({
  name: "history",
  data() {
	return{
		id: undefined,
		history: []
	}
  },
  mounted(){
	this.id = this.$route.params.id
	this.history = booksJson.books.filter(item => item.isin === this.id)[0].history
  }
});
</script>