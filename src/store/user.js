import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('user', {
  state: () => ({
    user: null,
    error: '',
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        this.error = error;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      }
      if (user) this.user = user;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      else this.user = null;
    },
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) {
        this.error = error;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      }
      if (user) this.user = user;
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,
      },
    ],
  },
});
