<template>
  <div v-if="setShowModal">
    <div class="backdrop" @click.self="closeModal" @keydown="close">
      <div v-if="theme === 'modifytask'" class="modalbox modifybox">
        <div class="modalimgcontainer">
          <img class="modalimg" src="@/assets/chewie.png" alt='Chewbacca'>
          <div class="modaltextcontainer">
            <h3>Modify Task</h3>
            <p>Hwaaurrgh ghaawwu huagg</p>
            <p>(Modify task title)</p>
          </div>
        </div>
        <label for="modifytask">
          <input class="addtaskinput modifytaskinput" type="text"
                  v-model="taskTitleModify"
                  :placeholder=currentTaskTitle />
          <button class="modifybutton modalbutton" @click="handleModifyTask">
            Save
          </button>
          <button class="modifybutton modalbutton" @click="closeModal">Cancel</button>
        </label>
      </div>
      <div v-else-if="theme === 'deletetask'" class="modalbox deletebox">
        <div class="modalimgcontainer">
          <img class="modalimg" src="@/assets/vader.png" alt='Dark Vader'>
          <div class="modaltextcontainer">
            <h3>Delete Task</h3>
            <p>Send to de dark side</p>
          </div>
        </div>
        <button class="deletebutton modalbutton" @click="handleDeleteTask">
          Delete
        </button>
        <button class="deletebutton modalbutton" @click="closeModal">Cancel</button>
      </div>
      <div v-else-if="theme === 'donetask'" class="modalbox donebox">
        <div class="modalimgcontainer">
          <img class="modalimg" src="@/assets/yoda.png" alt='Yoda'>
          <div class="modaltextcontainer">
            <div v-if="currentTaskStatus === false">
              <h3>Done Task</h3>
              <p>Do. Or do not. There is no try.</p>
            </div>
            <div v-else>
              <h3>Undone Task</h3>
              <p>Do. Or do not. There is no try.</p>
            </div>
          </div>
        </div>
        <button class="donebutton modalbutton" @click="handleDoneTask">
          Yes
        </button>
        <button class="donebutton modalbutton" @click="closeModal">No</button>
      </div>
    </div>
  </div>
</template>
<!-- this.modifyStateTask(taskId, !state); -->

<script>
export default {
  name: 'ModalBox',
  data() {
    return {
      showModal: false,
      taskTitleModify: '',
    };
  },
  props: {
    theme: String,
    setShowModal: Boolean,
    currentTaskId: Number,
    currentTaskTitle: String,
    currentTaskStatus: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    handleModifyTask() {
      try {
        const taskData = {
          title: this.taskTitleModify,
          taskId: this.currentTaskId,
        };
        this.$emit('modify-task', taskData);
        this.taskTitleModify = '';
      } catch (e) {
        console.log(e);
      }
    },
    handleDeleteTask() {
      this.$emit('delete-task');
    },
    handleDoneTask() {
      this.$emit('done-task');
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
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modalimgcontainer {
  display: flex;
  align-items: center;
  gap: 5px;
}

.modalimg {
  width: 110px;
  height: 90px;
  margin-left: 20px;
}

.modalbutton {
  color: #fff;
  font-size: 20px;
  width: 150px;
  border-radius: 10px;
  padding: 5px 10px;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}

.modalbutton:hover {
  color: #2c3e50;
  font-weight: 400;
  letter-spacing: 5px;
}

.modifybox h3{
  color: #3498db;
}

.modifybox {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}

.modifybutton {
  border-color: #3498db;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
}

.modifytaskinput::selection {
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
}

.deletebox h3 {
  color: red;
}

.deletebox {
  box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px red;
}

.deletebutton {
  border-color: red;
  box-shadow: 0 0 40px 40px red inset, 0 0 0 0 red;
}

.deletebutton:hover {
  box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px red;
}

.donebox h3{
  color: greenyellow;
  font-size: 2rem;
}

.donebox {
  box-shadow: 0 0 10px 0 greenyellow inset, 0 0 10px 4px greenyellow;
}

.donebutton {
  border-color: greenyellow;
  box-shadow: 0 0 40px 40px greenyellow inset, 0 0 0 0 greenyellow;
}

.donebutton:hover {
  box-shadow: 0 0 10px 0 greenyellow inset, 0 0 10px 4px greenyellow;
}
</style>
