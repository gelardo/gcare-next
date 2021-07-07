import axios from "axios";
import Cookie from "js-cookie";

export default {
    getCookie() {

        let token = Cookie.get("XSRF-TOKEN");

        if (token) {
            return new Promise(resolve => {
                resolve(token);
            });
        }
        return token;
        // return axios.get('/sanctum/csrf-cookie')
    }
};
