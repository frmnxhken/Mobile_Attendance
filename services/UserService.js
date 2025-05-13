import Api from "./Api";
import axios from "axios";
import { BASE_API, ENDPOINTS } from "@/constants/Config";
import { errorHandler } from "@/utils/errorHandler";

export const updatePassword = async ({ current_password, new_password, new_password_confirmation }) => {
    try {
        const response = await Api.post(ENDPOINTS.USER.UPDATE_PASSWORD, {
            current_password,
            new_password,
            new_password_confirmation        
        });
        return { success: true, data: response.data }
    } catch (error) {
        return errorHandler(error);
    }
}

export const resetPassword = async ({ nip, email }) => {
    try {
        const response = await axios.post(BASE_API + ENDPOINTS.AUTH.RESET_PASSWORD, {
            nip,
            email
        });
        return { success: true, data: response.data } 
    } catch (error) {
        return errorHandler(error);
    }
}

export const updatePhoto = async (uri) => {
    const formData = new FormData();
    formData.append("photo", {
        uri,
        name: "profile.jpg",
        type: "image/jpg",
    });
    
    try {
        const response = await Api.post(ENDPOINTS.USER.UPDATE_PHOTO, formData);
        return { success: true, data: response.data }
    } catch (error) {
        return errorHandler(error);
    }
}