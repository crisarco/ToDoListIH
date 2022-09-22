<template>
  <div class="container">
    <form class="form">
      <div class="form-group">
        <label for="username" class="text-auth">
          Username:
          <input v-model="email"
                type="text"
                name="username"
                id="username"
                class="authinput" />
        </label><br>
      </div>
      <div class="form-group">
        <label for="password" class="text-auth">
          Password:
          <input v-model="password"
                type="text"
                name="password"
                id="password"
                class="authinput" />
        </label><br><br>
      </div>
      <div class="form-group">
        <button class="authbutton" @click.prevent="handleSignIn">
          LogIn
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    ...mapActions(userStore, ['signIn']),

    handleSignIn() {
      try {
        if (this.email && this.password) {
          this.signIn(this.email, this.password);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
