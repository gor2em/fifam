<script setup>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import AuthService from "../services/AuthService";

const store = useStore();
const router = useRouter();

const state = reactive({
  user: {
    username: null,
    password: null,
  },
});
const login = () => {
  if (state.user.username != null || state.user.password != null) {
    AuthService.login(state.user).then((res) => {
      store.commit("setUser", res?.data);
      router.push({ name: "Home" });
    });
  } else {
    alert("boşlukları doldur.");
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="px-8 py-6 mt-4 shadow-2xl">
      <h3 class="text-2xl font-bold text-center text-indigo-600">Giriş Yap</h3>
      <form class="p-4" @submit.prevent="login">
        <div class="mt-4">
          <div>
            <input
              type="text"
              placeholder="kullanıcı adı"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.user.username"
            />
            <input
              type="password"
              placeholder="parola"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.user.password"
            />
          </div>

          <div class="flex items-baseline justify-center">
            <button class="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-900">Gir</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
