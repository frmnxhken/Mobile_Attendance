import Api from "./Api";
import axios from "axios";
import { BASE_API } from "@/constants/Config";

export const updatePassword = async ({ current_password, new_password, new_password_confirmation }) => {
    const response = await Api.post("/user/update-password", {
        current_password,
        new_password,
        new_password_confirmation        
    });
    
    return response;
};

export const resetPassword = async ({ nip, email }) => {
    const response = await axios.post(BASE_API + "/user/reset-password", {
        nip,
        email
    });
    console.log(response)
    
    return response;
};

export const updatePhoto = async (uri) => {
    const formData = new FormData();
    formData.append("photo", {
        uri,
        name: "profile.jpg",
        type: "image/jpg",
    });
    
    const response = await Api.post("/user/update-photo", formData);
    return response;
}