import axios from "axios";
import Api from "./Api";
import { BASE_API, ENDPOINTS } from "@/constants/Config";
import { errorHandler } from "@/utils/errorHandler";

export const Authentication = async (credential) => {
    try {
        const response = await axios.post(BASE_API + ENDPOINTS.AUTH.LOGIN, credential);
        return { success: true, data: response.data }
    } catch (error) {
        return errorHandler(error);
    }
}

export const deAuthentication = async () => {
    const response = await Api.post(ENDPOINTS.USER.LOGOUT);
    return response;
}