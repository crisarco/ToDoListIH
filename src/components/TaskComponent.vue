<template>
  <label for="addtask">
    <input type="text" id="addtask" v-model="taskTitle"/>
    {{ taskTitle }}
    <button @click="handleInsertTask(taskTitle, user.id)">Add Task</button>
  </label>
  <div class="task-element" v-for="task in tasks" :key="task.id">
    <label for="markascompleted">
      <input type="checkbox" id="markascompleted">
    </label>
    <p class="task">{{ task.title}}</p>
    <p class="task">{{ task.inserted_at }}</p>
    <p v-if="task.is_complete" class="task">Done</p>
    <p v-else class="task">ToDo</p>
    <button @click="handleDeleteTask(task.id, user.id)">Delete Task</button>
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
    ...mapActions(taskStore, ['insertTask', 'deleteTask']),

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
  },
};
</script>

<style>
.task-element {
  display: flex;
  justify-content: space-around;
}
</style>
