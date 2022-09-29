<template>
  <div class="container">
    <form class="form">
      <div class="form-group">
        <label for="username" class="text-auth">
          Jedi name:
          <input v-model="email"
                type="email"
                pattern="[^ @]*@[^ @]*"
                placeholder="Email"
                name="username"
                id="username"
                class="authinput" />
        </label><br>
      </div>
      <div class="form-group">
        <label for="password" class="text-auth">
          Secret code:
          <input v-model="password"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                class="authinput" />
        </label>
        <br>
        <div v-if="error">
          <p class="error">*{{ error.message }}</p>
        </div>
        <br>
      </div>
      <div class="form-group">
        <button class="authbutton" @click.prevent="handleSignUp">
          Accept me
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignUp',
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
    ...mapActions(userStore, ['signUp']),

    handleSignUp() {
      try {
        if (this.email && this.password) {
          this.signUp(this.email, this.password);
        }
      } catch (e) {
        this.errorMsg = e;
      }
    },
  },
};
</script>
