import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-blue-800 text-white p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Link to="/dashboard" className="block">Dashboard Home</Link>
      <Link to="/dashboard/all-users" className="block">All Users</Link>
    </div>
  );
};

export default Sidebar;
