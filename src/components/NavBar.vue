<template>
  <nav>
    <button class="authbutton" @click="handleSignOut">SignOut</button>
  </nav>
  <div v-if="showModal">
    <ModalBox @close="toggleModal" :modalTitle="modalTitle" :modalMsg="modalMsg">
        <h1>{{ modalTitle }}</h1>
        <p>{{ modalMsg }}</p>
        <br>
        <button @click="toggleModal">Close</button>
    </ModalBox>
  </div>
</template>

<script>
import userStore from '@/store/user';
import { mapActions } from 'pinia';
import ModalBox from '@/components/ModalBox.vue';

export default {
  name: 'NavBar',
  components: { ModalBox },
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
