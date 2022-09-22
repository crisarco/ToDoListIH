<template>
  <div class="container-authview">
    <div v-if="showsignin">
      <SignIn />
      <div class="texto-showsignin">
        <p>¡Quiero registrarme!</p>
        <button class="btn btn-info btn-md" @click="showSignIn">Registrarme</button>
      </div>
    </div>
    <div v-else>
      <SignUp />
      <div class="texto-showsignin">
        <p>¡Ya estoy registrado!</p>
        <button class="btn btn-info btn-md" @click="showSignIn">Entrar</button>
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
}

.box {
  width: 500px;
  margin: 200px 0;
  /* background-image: url('@/assets/nuveimg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; */
}

.shape1 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -50px;
}

.shape2 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -30px;
  float: left;
}

.shape3 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -30px;
  float: left;
  margin-left: -31px;
}

.shape4 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  margin-top: -25px;
  float: left;
  margin-left: -32px;
}

.shape5 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -48px;
  margin-left: -32px;
  margin-top: -30px;
}

.shape6 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -20px;
  margin-top: -35px;
}

.shape7 {
  position: relative;
  height: 150px;
  width: 150px;
  background-color: #0074d9;
  border-radius: 80px;
  float: left;
  margin-right: -20px;
  margin-top: -57px;
}

.float {
  position: absolute;
  z-index: 2;
}

.form {
  margin-left: 145px;
  margin-top: 20px;
}

.texto-showsignin {
  align-items: center;
  justify-items: center;
  margin: 30px;
}
</style>
