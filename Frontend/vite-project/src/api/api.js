import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});

// ===============================
// Response Interceptor
// ===============================

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    // No response or request already retried
    if (!error.response || originalRequest?._retry) {
      return Promise.reject(error);
    }

    // Only handle unauthorized requests
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    // Don't refresh these auth requests
    const publicAuthRoutes = [
      "/auth/login",
      "/auth/register",
      "/auth/refresh-token",
    ];

    if (publicAuthRoutes.includes(originalRequest.url)) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      // Get a new access token
      await api.post("/auth/refresh-token");

      // Retry original request
      return api(originalRequest);
    } catch (refreshError) {
      console.error(
        "Refresh token failed:",
        refreshError.response?.data || refreshError.message
      );

      return Promise.reject(refreshError);
    }
  }
);

export default api;