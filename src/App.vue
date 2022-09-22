<template>
  <nav v-if="user !== null">
    <button class="authbutton" @click="handleSignOut">SignOut</button>
  </nav>
  <router-view/>
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
import { mapState, mapActions } from 'pinia';
import ModalBox from '@/components/ModalBox.vue';

export default {
  name: 'App',
  components: { ModalBox },
  data() {
    return {
      showModal: false,
      modalTitle: '',
      modalMsg: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser', 'signOut']),

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

  async created() {
    try {
      await this.fetchUser();
      console.log(this.user);
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (e) {
      this.modalTitle = 'Error';
      this.modalMsg = e;
    }
  },
};
</script>

<style>
#app {
  font-family: 'Patrick Hand', Arial, Helvetica, sans-serif;
  font-size: 24px;
  text-align: center;
  color: #2c3e50;
}

input {
  margin-right: 10px;
}

h1 {
  font-family: 'Rampart One';
  font-size: 3em;
  color: #3498db;
}

h3 {
  font-family: 'Rampart One';
  font-size: 2em;
  color: #3498db;
}

.authbutton {
  border-color: #3498db;
  color: #fff;
  font-size: 20px;
  width: 150px;
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}

.authbutton:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  color:#2c3e50;
  font-weight: 400;
  letter-spacing: 5px;
}

nav .authbutton {
  margin: 20px;
  float: right;
}
</style>
