// src/features/auth/authService.js
import axios from "axios";

// API calls
export const loginUser = async ({ email, password }) => {
  const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
  return response.data;
};

export const registerUser = async ({ name, email, password }) => {
  const response = await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
  return response.data;
};


//http://localhost:5000