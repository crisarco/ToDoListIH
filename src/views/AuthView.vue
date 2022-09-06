<template>
  <!-- <h1>Esta es la vista de SignUp/In</h1>
  <button @click="handleSignUp">SignUp</button>
  <button @click="handleSignIn">SignIn</button> -->
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
                </label><br>
              </div>
              <div class="form-group">
                <button class="btn btn-info btn-md" @click.prevent="handleSignIn">
                  LogIn
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
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signIn']),

    handleSignUp() {
      const userData = {
        email: 'cris.arco83@gmail.com',
        password: 'pruebasignup',
      };
      this.signUp(userData.email, userData.password);
    },
    handleSignIn() {
      if (this.email && this.password) {
        this.signIn(this.email, this.password);
      }
    },
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

<style>
.box {
  width: 500px;
  margin: 200px 0;
}

.shape1 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -50px;
}

.shape2 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -30px;
  float: left;
}

.shape3 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -30px;
  float: left;
  margin-left: -31px;
}

.shape4 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -25px;
  float: left;
  margin-left: -32px;
}

.shape5 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -48px;
  margin-left: -32px;
  margin-top: -30px;
}

.shape6 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -20px;
  margin-top: -35px;
}

.shape7 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -20px;
  margin-top: -57px;
}

.float {
  position: absolute;
  z-index: 2;
}

.form {
  margin-left: 145px;
}
</style>
