import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls/dist/secure-ls.min";
var ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    _isAuth: (state) => state.user != null,
    _user(state) {
      const user = state.user;
      return user;
    },
  },
  plugins: [
    createPersistedState({
      key: "user",
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  actions: {},
  modules: {},
});
