import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      if (error) throw error;
      this.tasks = data;
    },
    resetStore() {
      this.tasks = null;
    },
    async insertTask(title, userId) {
      const { error } = await supabase
        .from('tasks')
        .insert([{ title, user_id: userId }]);
      if (error) throw error;
      this.fetchTasks();
    },
    async deleteTask(id, userId) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .match({ id, user_id: userId });
      if (error) throw error;
      this.fetchTasks();
    },
  },
});
