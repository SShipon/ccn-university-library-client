import { useEffect, useState } from "react";
import { fetchAllUsers, updateUserRole } from "../../hooks/usersService";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchAllUsers(); // Fetching the users from the API
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []); // Run getUsers once when the component mounts

  const handleRoleChange = async (id, currentRole) => {
    const newRole = currentRole === "admin" ? "student" : "admin"; // Toggle between 'admin' and 'user'

    try {
      await updateUserRole(id, newRole);  // Call the API to update the user's role
      alert(`Role updated to ${newRole}`);
      getUsers(); // Re-fetch the updated users
    } catch (error) {
      console.error("Role update failed:", error);
      alert("Failed to update role");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">All Users</h2>

      {loading ? (
        <p className="text-center">Loading...</p> // Show loading message while fetching
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-center">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="odd:bg-gray-100">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3 font-semibold">{user.role}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleRoleChange(user._id, user.role)}
                      className={`px-4 py-2 rounded text-white font-bold ${
                        user.role === "admin"
                          ? "bg-red-600 hover:bg-red-700"  // Button style for admin
                          : "bg-green-600 hover:bg-green-700"  // Button style for user
                      }`}
                    >
                      Make {user.role === "admin" ? "student" : "Admin"}  {/* Toggle role */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
