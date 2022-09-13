<template>
  <nav v-if="user !== null">
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view/>
  <button @click="toggleModal"><a href="#modal1">MODAL</a></button>
  <div v-if="showModal">
    <ModalBox @close="toggleModal">
      <label for="modifytask">
        <input type="text"/>
      </label>
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
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser']),

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
      console.error(e);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
