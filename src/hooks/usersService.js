import axios from "axios";

const API_BASE = "http://localhost:5000/api/auth";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");
  return { Authorization: `Bearer ${token}` };
};

export const fetchAllUsers = async () => {
  const res = await axios.get(`${API_BASE}/all-users`, {
    headers: getAuthHeader(),
  });
  return res.data;
};

export const updateUserRole = async (id, role) => {
  const res = await axios.patch(
    `${API_BASE}/update-role/${id}`,
    { role },
    {
      headers: getAuthHeader(),
    }
  );
  return res.data;
};
