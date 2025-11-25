// src/services/httpService.ts
import axios from "axios";

const BASE_URL = "http://localhost:9000/api"; // <-- Replace with your API base URL

// Create axios instance
const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token to every request if available
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

// Handle global errors (optional)
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle 401 globally
    if (error.response?.status === 401) {
      console.warn("Unauthorized. Redirecting to login...");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;
