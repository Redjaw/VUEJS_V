<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
html, body {
	width: 100%;
	height: 100%;
}
#app {
  
  background: url('~@/assets/bg.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
