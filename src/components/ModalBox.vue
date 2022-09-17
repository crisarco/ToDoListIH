<template>
    <div v-if="showModal">
        <div class="backdrop" @click.self="closeModal" @keydown="close">
            <div v-if="theme === 'modifytask'" class="modalbox">
                <h3>Modify Task</h3>
                <p>Modify your task title</p>
                <label for="modifytask">
                    <input class="addtaskinput" type="text"
                            v-model="taskTitleModify" :placeholder=currentTaskTitle />
                <button class="authbutton modalbutton"
                        @click="handleModifyTask(taskTitleModify, currentTaskId,
                                                currentUserId, true)">
                        Save
                </button>
                <button class="authbutton modalbutton" @click="toggleModal">Cancel</button>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ModalBox',
  data() {
    return {
      showModal: false,
      taskTitleModify: '',
    };
  },
  props: ['theme', 'setShowModal', 'currentTaskId', 'currentUserId'],
  methods: {
    closeModal() {
      this.showModal = false;
    },
    handleModifyTask(title, id, userId, show) {
      try {
        this.showModal = show;
        this.modifyTask(title, id, userId);
        this.showModal = false;
        this.taskTitleModify = '';
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.modalbox {
    width: 450px;
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
