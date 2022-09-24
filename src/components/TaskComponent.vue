<template>
  <div class="taskcontainer">
    <label for="addtask" class="addtasklabel">
      <input type="text" id="addtask" class="addtaskinput" v-model="taskTitle"/>
      <button class="authbutton" @click="handleInsertTask(taskTitle, user.id)">
        Add Task
      </button>
    </label>
    <div class="task-element" v-for="task in tasks" :key="task.id">
      <p class="task">{{ task.title}}</p>
      <!-- <p class="task">{{ transformDate(task.inserted_at) }}</p> -->
      <p v-if="task.is_complete" class="task">Done</p>
      <p v-else class="task">ToDo</p>
      <button class="taskbutton" id="modifybutton"
              @click="modifyTaskParams(task.id, task.title)">
      </button>
      <button class="taskbutton" id="donebutton"
              @click="openDoneModal(task.id, task.is_complete)">
      </button>
      <button class="taskbutton" id="deletebutton"
              @click="openDeleteModal(task.id)">
      </button>
    </div>
  </div>
  <ModalBox @modify-task="handleModifyTask"
            @close="handleCloseEditModal"
            theme="modifytask"
            :setShowModal="showEditModal"
            :currentTaskId="currentTaskId"
            :currentTaskTitle="currentTaskTitle"/>
  <ModalBox @delete-task="handleDeleteTask"
            @close="handleCloseDeleteModal"
            theme="deletetask"
            :setShowModal="showDeleteModal"/>
  <ModalBox @done-task="handleDoneTask"
            @close="handleCloseDoneModal"
            theme="donetask"
            :setShowModal="showDoneModal"
            :currentTaskId="currentTaskId"
            :currentTaskStatus="currentTaskStatus"/>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';
import ModalBox from './ModalBox.vue';

export default {
  name: 'TaskComponent',
  components: { ModalBox },
  data() {
    return {
      taskTitle: '',
      showEditModal: false,
      showDeleteModal: false,
      showDoneModal: false,
      currentTaskId: null,
      currentTaskTitle: '',
      currentTaskStatus: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['insertTask', 'deleteTask', 'modifyTask', 'modifyStateTask']),

    handleInsertTask(title, userId) {
      try {
        this.insertTask(title, userId);
        this.taskTitle = '';
      } catch (e) {
        console.log(e);
      }
    },
    handleDoneTask() {
      try {
        this.modifyStateTask(this.currentTaskId, !this.currentTaskStatus);
        this.handleCloseDoneModal();
      } catch (e) {
        console.log(e);
      }
    },
    handleDeleteTask() {
      try {
        this.deleteTask(this.currentTaskId);
        this.handleCloseDeleteModal();
      } catch (e) {
        console.log(e);
      }
    },
    transformDate(date) {
      const newDate = new Date(date);
      const dateFormated = newDate.toLocaleDateString();
      return dateFormated;
    },
    modifyTaskParams(taskId, title) {
      this.currentTaskId = taskId;
      this.currentTaskTitle = title;
      this.showEditModal = true;
    },
    handleModifyTask(taskData) {
      try {
        this.modifyTask(taskData.title, taskData.taskId);
        this.handleCloseEditModal();
      } catch (e) {
        console.log(e);
      }
    },
    handleCloseEditModal() {
      this.currentTaskId = 0;
      this.currentTaskTitle = '';
      this.showEditModal = false;
    },
    handleCloseDoneModal() {
      this.currentTaskStatus = '';
      this.showDoneModal = false;
    },
    openDoneModal(taskId, taskStatus) {
      this.currentTaskId = taskId;
      this.currentTaskStatus = taskStatus;
      this.showDoneModal = true;
    },
    handleCloseDeleteModal() {
      this.currentTaskId = 0;
      this.showDeleteModal = false;
    },
    openDeleteModal(taskId) {
      this.currentTaskId = taskId;
      this.showDeleteModal = true;
    },
  },
};
</script>

<style>
.taskcontainer {
  width: 800px;
  display: flex;
  flex-direction: column;
  align-self: center;
}
.task-element {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  background-color: white;
  box-sizing: border-box;
  border: 2px solid #EDFF00;
  border-radius: 10px;
}

.task {
  font-size: 30px;
}

.addtasklabel {
  margin-top: 20px;
  margin-bottom: 40px;
}

.addtaskinput {
  padding: 10px 6px;
  width: 400px;
  box-sizing: border-box;
  border: 2px solid #ddd;
  color: #555;
  border-radius: 10px;
  margin-right: 10px;
}

.modalbutton {
  margin: 20px;
}

.taskbutton {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3498db;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px;
}

.taskbutton:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  background-color: white;
}

#deletebutton {
  background-image: url("@/assets/delete.png");
  background-color: red;
}

#deletebutton:hover {
  box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px red;
  background-color: white;
}

#modifybutton {
  background-image: url("@/assets/pencil-2.png");
}

#donebutton {
  background-image: url("@/assets/tick.png");
  background-color: greenyellow;
}

#donebutton:hover {
  box-shadow: 0 0 10px 0 greenyellow inset, 0 0 10px 4px greenyellow;
  background-color: white;
}
</style>
