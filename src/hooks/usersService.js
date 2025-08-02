import axios from "axios";

// Fetch all users
export const fetchAllUsers = async () => {
  const res = await axios.get("http://localhost:5000/api/users");
  return res.data;
};

// Update user role
export const updateUserRole = async (id, role) => {
  const res = await axios.patch(`http://localhost:5000/api/users/${id}`, { role });
  return res.data;
};
