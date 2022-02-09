<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import LeagueService from "../services/LeagueService";

const leagueDetail = ref("");

const route = useRoute();
const router = useRouter();

onMounted(() => {
  LeagueService.getDetail(route.params.id)
    .then((res) => (leagueDetail.value = res.data))
    .catch(() => {
      router.push({ name: "NotFound" });
    });
});
</script>

<template>
  <div class="justify-center items-center h-screen flex text-center">
    <div class="grid grid-cols-6 gap-8">
      <div class="col-span-4">
        <h2 class="text-white font-bold text-4xl my-4">Lig Sıralaması</h2>
        <div class="bg-yellow-400 py-4 rounded-md">
          <h5 class="font-bold text-2xl">1. {{ leagueDetail.winner }}</h5>
        </div>
        <div class="bg-yellow-200 py-4 rounded-md mt-4">
          <h5 class="font-bold text-2xl">2. {{ leagueDetail.second }}</h5>
        </div>
        <div class="bg-yellow-100 py-4 rounded-md mt-4">
          <h5 class="font-bold text-2xl">3. {{ leagueDetail.third }}</h5>
        </div>
      </div>
      <div class="col-span-2">
        <h2 class="text-white font-bold text-4xl my-4">Lig Ödülleri</h2>
        <div class="bg-green-500 py-4 rounded-md">
          <h5 class="font-bold text-2xl">{{ leagueDetail.bestDefender }}</h5>
        </div>
        <div class="bg-red-500 py-4 rounded-md mt-4">
          <h5 class="font-bold text-2xl">{{ leagueDetail.bestAttacker }}</h5>
        </div>
        <div class="py-4 rounded-md mt-4 text-indigo-400">
          <span v-if="leagueDetail.isFinish">Tamamlandı</span>
          <span v-else>Devam Ediyor</span>
        </div>
      </div>
      <div class="col-span-6 flex flex-col">
        <small class="text-gray-400">{{ leagueDetail.description }}</small>
        <router-link to="/" class="text-white">Geri</router-link>
      </div>
    </div>
  </div>
</template>
