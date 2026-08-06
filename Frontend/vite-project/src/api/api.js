import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.response.use(

  (response) => response,

  async (error) => {

    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {

      if (
        originalRequest.url === "/auth/login" ||
        originalRequest.url === "/auth/register" ||
        originalRequest.url === "/auth/refresh-token"
      ) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {

        await api.post("/auth/refresh-token");

        return api(originalRequest);

      } catch (refreshError) {

        console.log("Refresh Token Expired");

        return Promise.reject(refreshError);

      }

    }

    return Promise.reject(error);

  }

);

export default api;