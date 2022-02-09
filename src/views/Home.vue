<script setup>
import { onMounted, ref } from "vue";
import LeagueService from "../services/LeagueService";

const leagues = ref();

import useVuex from "@/composables/UseVuex";
const { _user } = useVuex();
onMounted(() => {
  LeagueService.getAll().then((res) => (leagues.value = res.data));
});
</script>

<template>
  <div>
    <div class="py-8">
      <router-link to="/league/create" class="text-white rounded-sm bg-indigo-600 py-2 px-2" v-if="_user?.isAdmin">Yeni bir lig oluştur.</router-link>
    </div>
    <!-- <h2 class="text-center font-bold text-6xl p-4 text-red-900"></h2> -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div class="flex flex-col p-8 rounded-md shadow-lg bg-gray-800 text-center" v-for="league in leagues" :key="league._id">
        <router-link :to="'/league/' + league._id"
          ><h5 class="text-white">{{ league.title }}</h5></router-link
        >
        <!-- <small class="text-indigo-400 mt-4">{{ league.description }}</small> -->
        <span v-if="league.isFinish" class="inline-flex items-center justify-center px-2 py-1 mt-2 text-xs font-bold leading-none text-indigo-100 bg-green-600 border-0">Tamamlandı</span>
        <span v-else class="inline-flex items-center justify-center px-2 py-1 mt-2 text-xs font-bold leading-none text-indigo-100 bg-red-600 border-0">Devam Ediyor</span>

        <div v-if="_user?.isAdmin" class="text-white flex justify-center items-center mt-4">
          <router-link :to="'/league/update/' + league._id">
            <span class="inline-flex items-center justify-center px-2 py-1 mt-2 text-xs font-bold leading-none text-indigo-100 bg-gray-600 border-0">Güncelle</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
