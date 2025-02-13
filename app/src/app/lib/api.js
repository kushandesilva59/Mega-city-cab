// lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/auth",
});

export default api;
