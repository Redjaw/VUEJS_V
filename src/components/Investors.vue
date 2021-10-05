<template>
<select class="form-select" ref="select" @change="filtraNomi">
  <option v-for="investor in investorsForSelect" :key="investor.name" :value="investor.name">{{investor.name}}</option>
  <option value="test">Test</option>
</select>
	<ul>
    <li v-for="investor in investors" :key="investor.name">{{investor.name}} -- {{investor.investments}}</li>
  </ul>
</template>

<script>
import axios from 'axios'

export default ({
  name: "investors",
  data(){
    return {
      investors : [],
      investorsForSelect : []
    }
  },
  mounted(){
    axios.get('investors')
      .then(response=> {
        this.investors = this.investorsForSelect = response.data
      })
      .catch(error => console.log(error))
  },
  methods: {
    filtraNomi(){
      let nome = this.$refs.select.value
      axios.get('investors',{
        params: {
          name: nome
        }
      })
      .then(response=> {
        this.investors = response.data
      })
      .catch(error => console.log(error))
    }
  }
});
</script>