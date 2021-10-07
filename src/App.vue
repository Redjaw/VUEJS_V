<template>
  <div class="container text-center">
    <CustComponent />
  </div>
</template>

<script>
import CustComponent from '@/components/Component.vue'

export default {
  name: 'App',
  components: {
    CustComponent
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
