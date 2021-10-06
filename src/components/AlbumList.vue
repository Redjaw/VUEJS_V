<template>
	<div class="coverContainer">
		<div class="cover" :class="{'selected' : album === currentalbum, 'before' : album !== currentalbum}" v-for="(album, index) in albums" :key="index" @click="setSelection(album)">
			<img :src="require('@/assets/album/'+album.cover)" />
		</div>
	</div>
	
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import albumsJson from '@/assets/album.json'
import {IAlbum} from './Album'

export default defineComponent({
  name: "album-list",
  emits: ['selection'],
   props: {
    currentalbum: {
      required:true,
      type: Object as PropType<IAlbum>
    }
  },
  data() {
	return {
		albums : albumsJson.album as Array<IAlbum>
	}
  },
  methods: {
	setSelection(album:IAlbum):void{
		this.$emit('selection',album)
	}
  }
});
</script>

<style lang="scss" scoped>
.coverContainer {
	width: 100%;
	height: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.cover{
	width: 200px;
	height: 200px;
	cursor: pointer;
	transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
	img {
		width: 100%;
		height: 100%;
		-webkit-box-reflect: below 0 -webkit-gradient(
			linear,
			left top,
			left bottom,
			color-stop(.1, rgba(255, 255, 255, 0)),
			color-stop(.5, rgba(255, 255, 255, .1)),
			color-stop(1, rgba(255, 255, 255, .3))
			);
	}
	&:hover {
		transform: scale(1.1);
	}
	&.before {
		transform: skewY(-20deg) rotate3d(0, 6, 0, 50deg);
		margin-right: -100px;
		&:hover {
			transform: scale(1.1);
			z-index: 11;
		}
	}
	&.selected {
		margin: 0 100px;
	}
	&.after {
		transform: skewY(20deg) rotate3d(0, 6, 0, 50deg);
		margin-left: -100px;
		&:hover {
			transform: scale(1.1);
			z-index: 11;
		}
		&:nth-child(1){
			z-index: 10;
		}
		&:nth-child(2){
			z-index: 9;
		}
		&:nth-child(3){
			z-index: 8;
		}
		&:nth-child(4){
			z-index: 7;
		}
		&:nth-child(5){
			z-index: 6;
		}
	}
}


</style>
