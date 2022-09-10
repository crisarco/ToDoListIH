<template>
  <div class="container">
    <div id="login-row" class="row justify-content-center align-items-center">
      <div id="login-column" class="col-md-6">
        <div class="box">
          <div class="shape1"></div>
          <div class="shape2"></div>
          <div class="shape3"></div>
          <div class="shape4"></div>
          <div class="shape5"></div>
          <div class="shape6"></div>
          <div class="shape7"></div>
          <div class="float">
            <form class="form">
              <div class="form-group">
                <label for="username" class="text-white">
                  Username:
                  <input v-model="email"
                        type="text"
                        name="username"
                        id="username"
                        class="form-control" />
                </label><br>
              </div>
              <div class="form-group">
                <label for="password" class="text-white">
                  Password:
                  <input v-model="password"
                        type="text"
                        name="password"
                        id="password"
                        class="form-control" />
                </label><br><br>
              </div>
              <div class="form-group">
                <button class="btn btn-info btn-md" @click.prevent="handleSignUp">
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(userStore, ['signUp']),

    handleSignUp() {
      try {
        if (this.email && this.password) {
          this.signUp(this.email, this.password);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
