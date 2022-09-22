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
              @click="toggleDoneButton(task.id, task.is_complete)">
      </button>
      <button class="taskbutton" id="deletebutton"
              @click="handleDeleteTask(task.id, user.id)">
      </button>
    </div>
  </div>
  <ModalBox @modify-task="handleModifyTask"
            @close="handleCloseModal"
            theme="modifytask"
            :setShowModal="showModal"
            :currentTaskId="currentTaskId"
            :currentTaskTitle="currentTaskTitle"/>
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
      showModal: false,
      currentTaskId: null,
      currentTaskTitle: '',
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
    handleDeleteTask(id, userId) {
      try {
        this.deleteTask(id, userId);
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
      this.showModal = true;
    },
    handleModifyTask(taskData) {
      try {
        this.modifyTask(taskData.title, taskData.taskId);
        this.handleCloseModal();
      } catch (e) {
        console.log(e);
      }
    },
    handleCloseModal() {
      this.currentTaskId = 0;
      this.currentTaskTitle = '';
      this.showModal = false;
    },
    toggleDoneButton(taskId, state) {
      this.modifyStateTask(taskId, !state);
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
  column-gap: 10px;
  margin-bottom: 20px;
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
}

#modifybutton {
  background-image: url("@/assets/pencil-2.png");
}

#donebutton {
  background-image: url("@/assets/tick.png");
}
</style>
