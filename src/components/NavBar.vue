<template>
  <nav>
    <button class="authbutton" @click="handleSignOut">SignOut</button>
  </nav>
</template>

<script>
import userStore from '@/store/user';
import { mapActions } from 'pinia';

export default {
  name: 'NavBar',
  data() {
    return {
      showModal: false,
      modalTitle: '',
      modalMsg: '',
    };
  },
  methods: {
    ...mapActions(userStore, ['signOut']),

    handleSignOut() {
      try {
        this.signOut();
        this.resetStore();
      } catch (e) {
        this.modalTitle = 'Error';
        this.modalMsg = e;
      }
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
nav {
  position: inherit;
  width: 100%;
}

nav .authbutton {
  margin: 20px;
  float: right;
}
</style>
