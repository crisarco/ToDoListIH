<template>
  <div class="home">
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
  data() {
    return {
      errorMsg: '',
    };
  },
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
        this.errorMsg = e;
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
      this.errorMsg = error;
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
