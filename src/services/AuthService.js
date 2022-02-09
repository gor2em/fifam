import axios from "axios";
const endpoint = "/api/auth";

export default {
  login(data) {
    return axios.post(endpoint + "/login", data);
  },
};
