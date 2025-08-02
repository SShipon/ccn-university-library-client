import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

export const fetchBooksApi = async () => {
  return await axios.get(API_URL);
};

export const updateBookApi = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data);
};

export const deleteBookApi = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};


//https://ccn-university-library-server-production.up.railway.app
//http://localhost:5000