import { computed } from "vue";
import axios from "axios";
import store from "../store";

const token = computed(() => store.getters._user.token);

export function api() {
  return axios.create({
    headers: {
      token: `Bearer ${token.value}`,
    },
  });
}
