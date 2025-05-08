import Api from "./Api";

export const getAttendanceHistory = async () => {
    const response = await Api.get("/history");
    return response.data;
};

export const getAttendanceRecent = async () => {
    const response = await Api.get("/history/recent");
    return response.data;
}