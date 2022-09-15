<template>
  <div class="taskcontainer">
    <label for="addtask" class="addtasklabel">
      <input type="text" id="addtask" class="addtaskinput" v-model="taskTitle"/>
      <button class="authbutton addtaskbutton" @click="handleInsertTask(taskTitle, user.id)">
        Add Task
      </button>
    </label>
    <div class="task-element" v-for="task in tasks" :key="task.id">
      <label for="markascompleted">
        <input type="checkbox" id="markascompleted">
      </label>
      <p class="tasktitle">{{ task.title}}</p>
      <p class="task">{{ transformDate(task.inserted_at) }}</p>
      <p v-if="task.is_complete" class="task">Done</p>
      <p v-else class="task">ToDo</p>
      <button @click="handleModifyTask(taskTitle, task.id, user.id)">Modify Task</button>
      <button @click="handleDeleteTask(task.id, user.id)">Delete Task</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'TaskComponent',
  data() {
    return {
      taskTitle: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['insertTask', 'deleteTask', 'modifyTask']),

    handleInsertTask(title, userId) {
      try {
        this.insertTask(title, userId);
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
    handleModifyTask(title, id, userId) {
      try {
        this.modifyTask(title, id, userId);
      } catch (e) {
        console.log(e);
      }
    },
    transformDate(date) {
      const newDate = new Date(date);
      const dateFormated = newDate.toLocaleDateString();
      return dateFormated;
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
}

.addtaskinput:focus {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}
</style>
