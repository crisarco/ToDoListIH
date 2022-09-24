<template>
  <div class="auth-container">
    <div class="container-authview">
      <div v-if="showsignin">
        <SignIn />
        <div class="texto-showsignin">
          <p>Want to become a Jedi?</p>
          <button class="authbutton" id="registerbutton" @click="showSignIn">Register</button>
        </div>
      </div>
      <div v-else>
        <SignUp />
        <div class="texto-showsignin">
          <p>Already a Jedi?</p>
          <button class="authbutton" @click="showSignIn">LogIn</button>
        </div>
      </div>
    </div>
    <div v-if="showModal">
      <ModalBox @close="toggleModal" :modalTitle="modalTitle" :modalMsg="modalMsg">
          <h1>{{ modalTitle }}</h1>
          <p>{{ modalMsg }}</p>
          <br>
          <button @click="toggleModal">Close</button>
      </ModalBox>
    </div>
</div>
</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';
import ModalBox from '@/components/ModalBox.vue';

export default {
  name: 'AuthView',
  components: { SignIn, SignUp, ModalBox },
  data() {
    return {
      showsignin: true,
      showModal: false,
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    showSignIn() {
      this.showsignin = !this.showsignin;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

<style>
.container-authview {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 15px;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 10em;
  margin-right: 10em;
  padding: 20px;
}

.texto-showsignin {
  align-items: center;
  justify-items: center;
  margin: 30px;
}

label {
  display: inline-block;
  margin: 10px 0 10px;
}

.authinput {
  display: block;
  padding: 5px;
  width: 300px;
  box-sizing: border-box;
  border: 2px solid #ddd;
  color: #555;
  border-radius: 10px;
}

input:focus {
  box-shadow: 0 0 10px 0 #EDFF00 inset, 0 0 10px 4px #EDFF00;
}

#registerbutton {
  width: 180px;
}
</style>
