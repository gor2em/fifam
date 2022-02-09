<script setup>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import LeagueService from "../services/LeagueService";

const router = useRouter();
const route = useRoute();

const state = reactive({
  league: {
    title: null,
    description: null,
    winner: null,
    second: null,
    third: null,
    bestDefender: null,
    bestAttacker: null,
    isFinish: null,
  },
});

onMounted(() => {
  LeagueService.getDetail(route.params.id).then((response) => {
    state.league = response.data;
  });
});

const updateLeague = () => {
  LeagueService.updateLeague(route.params.id, state.league).then(() => {
    router.push({ name: "Home" });
  });
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="px-8 py-6 mt-4 shadow-2xl bg-gray-800">
      <h3 class="text-2xl font-bold text-center text-indigo-600">{{ state.league.title }}</h3>
      <form class="p-2" @submit.prevent="updateLeague">
        <div class="mt-4 text-center">
          <div class="p-3">
            <label for="" class="text-gray-400">Lig Başlığı</label>
            <input
              type="text"
              placeholder="lig başlığı"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.title"
            />
          </div>
          <div class="p-3">
            <label for="" class="text-gray-400">Lig Açıklaması</label>

            <input
              type="text"
              placeholder="not (opsiyonel)"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.description"
            />
          </div>
          <div class="p-3">
            <label for="" class="text-gray-400">1.</label>
            <input
              type="text"
              placeholder="Birinci"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.winner"
            />
          </div>
          <div class="p-3">
            <label for="" class="text-gray-400">2.</label>

            <input
              type="text"
              placeholder="İkinci"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.second"
            />
          </div>
          <div class="p-3">
            <label for="" class="text-gray-400">3.</label>

            <input
              type="text"
              placeholder="Üçüncü"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.third"
            />
          </div>
          <div class="p-3">
            <label for="" class="text-gray-400">En iyi Defans</label>

            <input
              type="text"
              placeholder="En iyi Defans"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.bestDefender"
            />
          </div>
          <div class="p-3">
            <label for="" class="text-gray-400">En iyi Atak</label>

            <input
              type="text"
              placeholder="En iyi Atak"
              class="w-full px-4 py-2 mt-2 border text-white border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              v-model="state.league.bestAttacker"
            />
          </div>
          <div class="flex justify-center text-red-400" v-if="state.league.isFinish">
            <button @click="state.league.isFinish = !state.league.isFinish">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div class="flex justify-center text-green-400" v-else>
            <button @click="state.league.isFinish = !state.league.isFinish">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
            </button>
          </div>

          <div class="flex items-baseline justify-center">
            <button class="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-900">Güncelle</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
