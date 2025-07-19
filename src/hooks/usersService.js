import axios from "axios";

// Fetch all users
export const fetchAllUsers = async () => {
  const res = await axios.get("https://ccn-university-library-server-production.up.railway.app/api/users");
  return res.data;
};

// Update user role
export const updateUserRole = async (id, role) => {
  const res = await axios.patch(`https://ccn-university-library-server-production.up.railway.app/api/users/${id}`, { role });
  return res.data;
};
