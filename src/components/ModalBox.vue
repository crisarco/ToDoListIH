<template>
    <div class="backdrop" @click.self="closeModal" @keydown="close">
        <div class="modalbox">
            <a href="#close" title="Close" class="close">X</a>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ModalBox',
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modalbox {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}

/*Boton de cerrar*/
.close {
    background: #606061;
    color: #FFFFFF;
    line-height: 25px;
    position: absolute;
    right: 1px;
    text-align: center;
    top: 1px;
    width: 24px;
    text-decoration: none;
    font-weight: bold;
    border-radius:3px;

}

.close:hover {
    background: #0074d9;
    color:#FFFFFF;
}
</style>
