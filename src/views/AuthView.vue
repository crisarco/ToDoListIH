<template>
  <h1>Esta es la vista de SignUp/In</h1>
  <button @click="handleSignUp">SignUp</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView',
}
</script>