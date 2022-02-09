import axios from "axios";
const endpoint = "/auth";
const url = process.env.VUE_APP_API_URL;
export default {
  login(data) {
    return axios.post(url + endpoint + "/login", data);
  },
};
