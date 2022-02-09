const endpoint = "/league";
import axios from "axios";

const url = process.env.VUE_APP_API_URL;

import { api } from "./UseApi";

export default {
  getAll() {
    return axios.get(url + endpoint);
  },
  getDetail(id) {
    return axios.get(url + endpoint + "/" + id);
  },
  createLeague(data) {
    return api().post(endpoint, data);
  },
  updateLeague(id, data) {
    return api().put(endpoint + "/" + id, data);
  },
};
