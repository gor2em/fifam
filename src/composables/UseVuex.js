import { computed } from "vue";
import { useStore } from "vuex";

export default function () {
  const store = useStore();
  const _user = computed(() => store.getters._user);

  return { _user };
}
