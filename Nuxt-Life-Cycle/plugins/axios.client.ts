import axios from "axios";

// Create a global axios instance
const axiosInstance = axios.create({
  baseURL: "/api", // Use Nuxt server API routes
  timeout: 5000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(
      "📤 [Axios] Request:",
      config.method?.toUpperCase(),
      config.url
    );
    return config;
  },
  (error) => {
    console.error("❌ [Axios] Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("📥 [Axios] Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("❌ [Axios] Response Error:", error.message);
    return Promise.reject(error);
  }
);

// Make axios available globally via $axios
export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: axiosInstance,
    },
  };
});

