import axios from "axios";
import { BASE_API } from "@/constants/Config";

const Api = axios.create({
    baseURL: BASE_API,
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});

Api.interceptors.request.use(config => {
    const token = "Bearer 2|ZFmiDtSBKQ2QMaA9wTjI8RZxcQtL1yGQ5HHjpmPK843e1aae";
    config.headers.Authorization = token;
    return config;
});

export default Api;
