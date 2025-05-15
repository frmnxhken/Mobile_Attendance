import Api from "./Api";
import { ENDPOINTS } from "@/constants/Config";

export const getHollidays = async () => {
    const response = await Api.get(ENDPOINTS.HOLLIDAY);
    return response.data;
}
