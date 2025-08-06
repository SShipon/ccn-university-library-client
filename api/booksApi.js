import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

const getAuthHeader = () => {
  const token = localStorage.getItem("access-token");
  if (!token) throw new Error("No token found");
  return { Authorization: `Bearer ${token}` };
};

export const fetchBooksApi = async () => {
  return await axios.get(API_URL);
};

export const updateBookApi = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data, {
    headers: getAuthHeader(),
  });
};

export const deleteBookApi = async (id) => {
  return await axios.delete(`${API_URL}/${id}`, {
    headers: getAuthHeader(),
  });
};


//https://ccn-university-library-server-production.up.railway.app
//http://localhost:5000