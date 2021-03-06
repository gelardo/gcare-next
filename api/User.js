import Api from "./Api";
import Csrf from "./Csrf";
// export  const  listSpecialities = async () => {
//       await Api.get('/speciality/index').then(function (response){
//         return response.data.data
//     }).catch(function (error){
//         return {error};
//     })
// }
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
    },
    async updateProfile(headers){
        await Csrf.getCookie();
        return Api.post('/update_profile',headers)
    },
    async listData(model,headers = null){
        await Csrf.getCookie();
        return Api.get('/'+model+'/index',headers)
    },
    async bookDoctorAppointment(headers){
        await Csrf.getCookie()
        return Api.post('/book_appointment/store',headers)
    },
    async listSpecialities(){
        return  Api.get('/speciality/index')
    }

};