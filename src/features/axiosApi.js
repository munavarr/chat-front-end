import axios from "axios";

const localBaseUrl = "http://192.168.1.6:4001";

export const AxiosApi = axios.create({
  baseURL: localBaseUrl,
  withCredentials: true,
});

AxiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  } else {
    console.log("error");
  }

  return config;
});
