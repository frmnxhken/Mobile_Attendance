import Api from "./Api";

export const getAttendanceHistory = async () => {
    const response = await Api.get("/history");
    return response.data;
};
