import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_API } from "@/constants/Config";

const Api = axios.create({
    baseURL: BASE_API,
    headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"
    }
});

Api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("access_token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

export default Api;
