import axios from "axios";
import { BASE_API } from "@/constants/Config";

export const Authentication = async (credential) => {
    const response = await axios.post(BASE_API + "/auth", {
        credential
    });
    return response
}