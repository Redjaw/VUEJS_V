<template>
  <List />
  <Running :run=""/>
</template>

<script>
import Running from '@/components/Running.vue'

export default {
  name: 'App',
  components: {
    List,
    Running
  }
}
</script>

<style>
html, body {
	width: 100%;
	height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
