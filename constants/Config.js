export const BASE_API = "http://192.168.1.16:8000/api";

export const ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth",
        RESET_PASSWORD: "/auth/reset-password"
    },
    USER: {
        PROFILE: "/user/profile",
        LOGOUT: "/user/logout",
        UPDATE_PHOTO: "/user/update-photo",
        UPDATE_PASSWORD: "/user/update-password"
    },
    HISTORY: {
        RECENT: "/history/recent",
        ALL: "/history"
    },
    ATTENDANCE: {
        STATUS: "/attendance/status",
        CHECKIN: "/attendance/checkin",
        CHECKOUT: "/attendance/checkout"
    },
    EXCUSE: {
        EXCUSES: "/excuse", 
        REQUEST: "/excuse/request"
    }
}
