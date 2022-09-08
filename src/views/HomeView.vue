<template>
  <div class="home">
    <h1>Esta es la vista de Home</h1>
    <button @click="handleSignOut">SignOut</button>
    <br>
    <div><p v-for="task in tasks" :key="task.id">{{ task.title }}</p></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import taskStore from '@/store/task';

export default {
  name: 'HomeView',
  components: { },
  computed: {
    ...mapState(userStore, ['user']),
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    ...mapActions(taskStore, ['fetchTasks', 'resetStore']),

    handleSignOut() {
      this.signOut();
      this.resetStore();
    },
  },
  watch: {
    user() {
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      }
    },
  },
  created() {
    try {
      this.fetchTasks();
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>

</style>
