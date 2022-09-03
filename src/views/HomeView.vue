<template>
  <div class="home">
    <h1>Esta es la vista de Home</h1>
    <button @click="signOut">SignOut</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'HomeView',
  components: { },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
  },
  watch: {
    user() {
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      }
    },
  },
};
</script>
