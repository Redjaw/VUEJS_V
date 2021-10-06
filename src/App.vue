<template>
  <SelfDestructComponent></SelfDestructComponent>
  <router-view />
</template>

<script>
import SelfDestructComponent from '@/components/SelfDestructComponent.vue'
export default {
  name: 'App',
  components: {SelfDestructComponent}
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
