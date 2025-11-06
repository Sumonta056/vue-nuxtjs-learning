import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
  actions: {
    setUser(email, password) {
      this.user = { email, password };
    },
    deleteUser() {
      this.user = { email: "", password: "" };
    },
  },
});

