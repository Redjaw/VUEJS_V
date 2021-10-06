<template>
  <div class="container d-flex flex-column">
    <div class="row flex-fill">
      <div class="col">
        <AlbumList :currentalbum="selectedAlbum" @selection="setSelectedAlbum"/>
      </div>
    </div>
    <div class="row flex-fill">
      <div class="col">
        <Info :album="selectedAlbum"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AlbumList from './components/AlbumList.vue'
import Info from './components/Info.vue'
import { defineComponent } from 'vue'

import {IAlbum} from './components/Album'

export default defineComponent({
  name: 'App',
  components: {
    AlbumList,
    Info
  },
  data() {
    return {
      selectedAlbum: {} as IAlbum
    }
  },
  methods: {
    setSelectedAlbum(album:IAlbum) :void {
      this.selectedAlbum = album
    }
  }
})
</script>

<style lang="scss">
html, body {
	width: 100%;
	height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background-color: #181818;
  .container {
    height: 100%;
  }
}
</style>
