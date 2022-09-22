<template>
  <div class="auth-container">
    <h1>My things</h1>
    <div class="container-authview">
      <div v-if="showsignin">
        <SignIn />
        <div class="texto-showsignin">
          <p>¡Quiero registrarme!</p>
          <button class="authbutton" id="registerbutton" @click="showSignIn">Registrarme</button>
        </div>
      </div>
      <div v-else>
        <SignUp />
        <div class="texto-showsignin">
          <p>¡Ya estoy registrado!</p>
          <button class="authbutton" @click="showSignIn">Entrar</button>
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
  background-color: #3498db;
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
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}

#registerbutton {
  width: 180px;
}
</style>
