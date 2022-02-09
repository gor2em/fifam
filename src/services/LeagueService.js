const endpoint = "/league";
import axios from "axios";

import { api } from "./UseApi";

export default {
  getAll() {
    return axios.get("https://fifaso.herokuapp.com/api", endpoint);
  },
  getDetail(id) {
    return axios.get(endpoint + "/" + id);
  },
  createLeague(data) {
    return api().post(endpoint, data);
  },
  updateLeague(id, data) {
    return api().put(endpoint + "/" + id, data);
  },
};
