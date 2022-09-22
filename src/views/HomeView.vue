<template>
  <div class="home">
    <h1>My things</h1>
    <br>
    <TaskComponent/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import taskStore from '@/store/task';
import TaskComponent from '@/components/TaskComponent.vue';

export default {
  name: 'HomeView',
  components: { TaskComponent },
  computed: {
    ...mapState(userStore, ['user']),
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    ...mapActions(taskStore, ['fetchTasks', 'resetStore']),

    handleSignOut() {
      try {
        this.signOut();
        this.resetStore();
      } catch (e) {
        console.log(e);
      }
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
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
}

</style>
