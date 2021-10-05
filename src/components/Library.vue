<template>
	<ul class="list-group">
		<li v-for="book in books" :key="book.isin" class="list-group-item">
			<router-link :to="{name: 'book', params: {id:book.isin}}">{{book.name}}</router-link>
		</li>
	</ul>
</template>

<script>
import booksJson from '@/assets/books.json'

export default ({
  name: "library",
  data(){
	return {
		books: booksJson.books
	}
  }
});
</script>