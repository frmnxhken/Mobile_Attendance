import Api from "./Api";
import { ENDPOINTS } from "@/constants/Config";

export const getAttendanceHistory = async () => {
    const response = await Api.get(ENDPOINTS.HISTORY.ALL);
    return response.data;
};

export const getAttendanceRecent = async () => {
    const response = await Api.get(ENDPOINTS.HISTORY.RECENT);
    return response.data;
}