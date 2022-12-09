
import axios from "axios";

export const http = axios.create({
    baseURL: "http://185.217.131.80:5030",
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if(token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
});