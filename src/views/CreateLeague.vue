<script setup>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import LeagueService from "../services/LeagueService";

const router = useRouter();

const state = reactive({
  league: {
    title: null,
    description: null,
    winner: null,
    second: null,
    third: null,
    bestDefender: null,
    bestAttacker: null,
  },
});
const createLeague = () => {
  LeagueService.createLeague(state.league).then((response) => {
    state.league = response.data;
    router.push({ name: "Home" });
  });
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="px-8 py-6 mt-4 shadow-2xl">
      <h3 class="text-2xl font-bold text-center text-indigo-600">Yeni lig oluştur...</h3>
      <form class="p-4" @submit.prevent="createLeague">
        <div class="mt-4">
          <div>
            <input
              type="text"
              placeholder="lig başlığı"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.title"
            />
            <input
              type="text"
              placeholder="not (opsiyonel)"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.description"
            />
          </div>
          <div class="flex items-baseline justify-center">
            <button class="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-900">Oluştur</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
