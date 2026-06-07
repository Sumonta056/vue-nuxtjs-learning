import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: {
      username: "",
      password: "",
    },
  }),
  actions: {
    setUser(username, password) {
      this.user = { username, password };
    },
    deleteUser() {
      this.user = { username: "", password: "" };
    },
  },
});

