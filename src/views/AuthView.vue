<template>
  <h1>Esta es la vista de SignUp/In</h1>
  <button @click="handleSignUp">SignUp</button>
  <button @click="handleSignIn">SignIn</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    ...mapActions(userStore, ['signIn']),
    handleSignUp() {
      const userData = {
        email: 'cris.arco83@gmail.com',
        password: 'pruebasignup',
      };
      this.signUp(userData.email, userData.password);
    },
    handleSignIn() {
      const userData = {
        email: 'cris.arco83@gmail.com',
        password: 'pruebasignup',
      };
      this.signIn(userData.email, userData.password);
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
