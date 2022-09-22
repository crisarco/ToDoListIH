<template>
  <div class="container">
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
        <button class="authbutton" @click.prevent="handleSignUp">
          SignUp
        </button>
      </div>
    </form>
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
