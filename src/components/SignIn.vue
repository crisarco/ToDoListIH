<template>
  <div class="container">
    <form class="form">
      <div class="form-group">
        <label for="username" class="text-auth">
          Jedi name:
          <input v-model="email"
                type="text"
                name="username"
                id="username"
                class="authinput" />
        </label><br>
      </div>
      <div class="form-group">
        <label for="password" class="text-auth">
          Secret code:
          <input v-model="password"
                type="text"
                name="password"
                id="password"
                class="authinput" />
        </label>
        <br>
        <div v-if="error">
          <p class="error">*</p>
        </div>
        <br>
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
import { mapActions, mapState } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '',
    };
  },
  computed: {
    ...mapState(userStore, ['error']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),

    handleSignIn() {
      try {
        if (this.email && this.password) {
          this.signIn(this.email, this.password);
        }
      } catch (e) {
        this.errorMsg = e;
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
