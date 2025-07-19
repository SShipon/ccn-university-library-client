// src/features/auth/authService.js
import axios from "axios";

// API calls
export const loginUser = async ({ email, password }) => {
  const response = await axios.post("https://ccn-university-library-server.onrender.com/api/login", { email, password });
  return response.data;
};

export const registerUser = async ({ name, email, password }) => {
  const response = await axios.post("https://ccn-university-library-server.onrender.com/api/register", { name, email, password });
  return response.data;
};


