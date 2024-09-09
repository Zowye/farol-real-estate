import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    email: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
    getUsername: (state) => (state.user ? state.user.displayName : null),
    getEmail: (state) => (state.email ? state.email : null),
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setUserEmail(email) {
      this.email = email;
    },
    clearUser() {
      this.user = null;
    },
  },
});
