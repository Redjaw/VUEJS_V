<template>
	<div class="row h-100 d-flex align-items-center">
      <div class="col-1 text-center">
          <i class="fas fa-backward fa-3x"></i>
      </div>
      
      <div class="col text-center" v-if="album.name">
        <h2>
          <a v-if="album.link" :href="album.link">{{album.name}}</a>
          <span v-if="!album.link">{{album.name}}</span>
        </h2>
        <h3>
          <a v-if="album.author && album.author.link" :href="album.author.link" target="_blank">{{album.author.name}}</a>
          <span v-if="!album.author">{{album.author.name}}</span>
        </h3>
        <h4>{{album.year}}</h4>
        <h5>00:00 / {{returnDuration(album.duration)}}</h5>
      </div>

      <div class="col-1 text-center">
        <i class="fas fa-forward fa-3x"></i>
      </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, PropType} from 'vue'
import timeHelper from '../helpers/timeHelper'
import {IAlbum} from './Album'

export default defineComponent({
  name: "info",
  props: {
    album: {
      required:true,
      type: Object as PropType<IAlbum>
    }
  },
  data(){
    return{
      selectedAlbum: {} as IAlbum
    }
  },
  mounted(){
    this.selectedAlbum = this.album
  },
  methods: {
    returnDuration(duration:number|string):string{
      return typeof duration === 'string' ? duration : timeHelper.millisToMinutesAndSeconds(duration)
    }
  }
});
</script>

<style lang="scss" scoped>
    .row {
        color: white;
        a {
            color: white;
        }
    }
</style>
