<template>
  <div class="row justify-content-center">
    <div class="col-6 text-center">
      <Veeform @submit="register" class="card card-form">
        <h1 class="text-center">Register</h1>

        <div class="m-2">
          <label class="form-label" for="name" >Full Name</label>
          <VeeField name="name" v-model="form.name" id="name" type="text" class="form-control" />
          <ErrorMessage name="name" class="badge bg-secondary"/>
        </div>

        <div class="m-2">
          <label class="form-label" for="username">Username</label>
          <VeeField name="username" v-model="form.username" id="username" type="text" class="form-control" rules="required"/>
          <ErrorMessage name="username" class="badge bg-secondary"/>
        </div>

        <div class="m-2">
          <label class="form-label" for="email">Email</label>
          <VeeField name="email" v-model="form.email" id="email" type="email" class="form-control" :rules="{email:true,required:true}"/>
          <ErrorMessage name="email" class="badge bg-secondary"/>
        </div>

        <div class="m-2">
          <label class="form-label" for="password">Password</label>
          <VeeField name="password" v-model="form.password" id="password" type="password" class="form-control" :rules="{required:true,min:4}"/>
          <ErrorMessage name="password" class="badge bg-secondary"/>
        </div>

        <div class="m-2">
          <label class="form-label" for="avatar">
            Avatar
            <div v-if="avatarPreview">
              <img :src="avatarPreview" class="avatar-xlarge">
            </div>
          </label>
          <VeeField name="avatar" v-show="!avatarPreview" id="avatar" type="file" class="form-control" @change="handleImageUpload" accept="image/*" />
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary m-3">Register</button>
        </div>
      </Veeform>
    </div>
  </div>
</template>

<script>

export default {
	name: 'form',
  data () {
    return {
      avatarPreview: null,
      form: {
        name: '',
        username: '',
        email: '',
        password: '',
        avatar: ''
      },
    }
  },
  methods: {
    register () {
		console.log('registrato')
    }
  }
}
</script>

<style lang="scss">
  .card{
    color: $variabile;
  }

</style>