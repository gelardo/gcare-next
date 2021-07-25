import Api from "./Api";
import Csrf from "./Csrf";

export default {
    async register(form) {
        await Csrf.getCookie();
        return Api.post("/register/1", form);
    },

    // async login(form) {
    //     await Csrf.getCookie();
    //     return Api.post("/login/1", form);
    // },
    async profileImage(headers) {
        await Csrf.getCookie();
        return Api.get("/profile-images",headers)
    },
    async uploadProfileImages(headers){
        await Csrf.getCookie();
        return Api.post('/upload_profile_images',headers)
    },
    async logout(headers) {
        await Csrf.getCookie();
        return Api.get("/logout",headers)
    },

    async auth(headers) {
        await Csrf.getCookie();
        return Api.get("/user",headers);
    }
};