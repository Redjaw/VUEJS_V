<template>
    <form>
        <div class="mb-3">
            <label for="acme" class="form-label">ACME Inc</label>
            <input type="number" name="acme" ref="acme" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="global" class="form-label">Global Inc</label>
            <input type="number" name="global" ref="global" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-primary" @click="getFormValues">Aggiungi Stock</button>
    </form>
</template>

<script>

export default ({
  name: "add-stocks",
  data() {
      return{
          newAcme : undefined,
          newGlobal: undefined
      }
  },
  methods: {
      getFormValues(){
          this.newAcme = this.$refs.acme.value
          this.newGlobal = this.$refs.global.value

          this.axios.post('stocks',
              {
                  acme: this.newAcme,
                  global: this.newGlobal
              }
          )
      }
  }
});
</script>