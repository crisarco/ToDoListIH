<template>
  <div class="taskcontainer">
    <div class="add-task-container">
    <label for="addtask" class="addtasklabel">
      <input type="text" id="addtask" class="addtaskinput" v-model="taskTitle"/>
      <button class="authbutton" @click="handleInsertTask(taskTitle, user.id)">
        Add Task
      </button>
    </label>
    </div>
    <div class="task-element" v-for="task in tasks" :key="task.id"
        :class="task.is_complete ? 'done-task' : 'todo-task'">
      <p v-if="task.is_complete" class="task-status">Done</p>
      <p v-else class="task-status">ToDo</p>
      <div class="task-title-container">
        <p class="task">{{ task.title}}</p>
      </div>
      <div class="button-container">
        <button class="taskbutton" id="modifyButton"
              @click="modifyTaskParams(task.id, task.title)"
              title="Modify Task">
        </button>
      <button class="taskbutton" id="doneButton"
              @click="openDoneModal(task.id, task.is_complete)"
              title="Mark Done/Undone">
      </button>
      <button class="taskbutton" id="deleteButton"
              @click="openDeleteModal(task.id)"
              title="Delete Task">
      </button>
      </div>
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
      errorMsg: '',
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
        this.errorMsg = e;
      }
    },
    handleDoneTask() {
      try {
        this.modifyStateTask(this.currentTaskId, !this.currentTaskStatus);
        this.handleCloseDoneModal();
      } catch (e) {
        this.errorMsg = e;
      }
    },
    handleDeleteTask() {
      try {
        this.deleteTask(this.currentTaskId);
        this.handleCloseDeleteModal();
      } catch (e) {
        this.errorMsg = e;
      }
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
        this.errorMsg = e;
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
  background-color: rgba(245, 247, 216, 0.8);
  box-sizing: border-box;
  border: 2px solid #EDFF00;
  box-shadow: 0 0 10px 0 #EDFF00 inset, 0 0 10px 4px #EDFF00;
  border-radius: 10px;
}

.task {
  font-size: 22px;
  max-width: 400px;
  word-break: break-word;
  padding: 10px;
}

.task-status {
  font-size: 22px;
  padding: 10px;
}

.button-container {
  display: flex;
  gap: 10px;
  padding: 5px;
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

.addtaskinput:focus {
  box-shadow: 0 0 10px 0 #EDFF00 inset, 0 0 10px 4px #EDFF00;
}

.modalbutton {
  margin: 20px;
}

.taskbutton {
  width: 50px;
  height: 50px;
  border: 2px solid #ddd;
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

#deleteButton {
  background-image: url("@/assets/BB8.PNG");
  background-color: white;
}

#deleteButton:hover {
  box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px red;
  background-color: white;
}

#modifyButton {
  background-image: url("@/assets/R2D2.PNG");
  background-color: white;
}

#doneButton {
  background-image: url("@/assets/C3PO.PNG");
  background-color: white;
}

#doneButton:hover {
  box-shadow: 0 0 10px 0 greenyellow inset, 0 0 10px 4px greenyellow;
  background-color: white;
}

.done-task {
  border: 2px solid greenyellow;
  box-shadow: 0 0 10px 0 greenyellow inset, 0 0 10px 4px greenyellow;
  background-color: rgba(173, 255, 47, 0.7);
}

.task-element:hover {
  box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
}

@media only screen and (max-width: 700px) {
  .task-element {
    flex-direction: column;
    width: 60%;
    align-self: center;
  }

  .task-title-container {
    flex-direction: column;
  }

  .addtasklabel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .addtaskinput {
    width: 300px;
  }

}
</style>
