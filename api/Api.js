import axios from "axios";

let Api = axios.create({
    baseURL: "https://backend.gcare.com.bd/api"
});

Api.defaults.withCredentials = true;

export default Api;