<template>
    <NavBar v-if="user !== null"/>
    <h1>JEDI TASKS</h1>
    <h4>May the force be with you...</h4>
    <br>
    <router-view/>
</template>

<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser']),
  },

  async created() {
    try {
      await this.fetchUser();
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
  color: black;
  display: flex;
  flex-direction: column;
}
body {
  background-image: url('@/assets/galaxy.jpg');
  background-size: cover;
}

@font-face {
  font-family: "jedifont";
  src: url(@/common/SfDistantGalaxy.ttf);
  font-weight: normal;
  font-style: normal;
}

h1 {
  font-family: 'jedifont';
  font-size: 3.6em;
  color:whitesmoke;
}

h3 {
  font-family: 'jedifont';
  font-size: 1.5em;
}

h4 {
  font-family: 'jedifont';
  color: whitesmoke;
}

p {
  margin: 0;
  padding: 0;
}

.authbutton {
  border-color: #EDFF00;
  color: black;
  font-size: 20px;
  width: 150px;
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0 0 40px 40px #EDFF00 inset, 0 0 0 0 #EDFF00;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}

.authbutton:hover {
  box-shadow: 0 0 10px 0 #EDFF00 inset, 0 0 10px 4px #EDFF00;
  color:#2c3e50;
  font-weight: 400;
  letter-spacing: 5px;
}

.text-auth {
  color:black;
}
</style>
