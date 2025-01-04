import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/Credo",
});

export const getBlock = (name) => api.get(`getBlockById.php?name=${name}`);
export const updateBlock = (data) => api.post("getBlockById.php", data);
export const login = (data) => api.post("handleLogin.php", data);
