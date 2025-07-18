import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user-info") || "null");

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("user-info");
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className={`w-full ${darkMode ? "bg-gray-900" : "bg-blue-700"} text-white`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to="/" className="font-bold text-xl">📚 Library</Link>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/books" className="hover:text-yellow-300">Books</Link>
          {user?.role === "admin" && (
            <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
          )}
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/help" className="hover:text-yellow-300">Help</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold transition"
            >
              Login
            </Link>
          )}

          <button onClick={toggleTheme} className="p-2 rounded-full">
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`flex flex-col gap-4 p-4 ${darkMode ? "bg-gray-800" : "bg-blue-600"} md:hidden`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/books" onClick={toggleMenu}>Books</Link>
          {user?.role === "admin" && (
            <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
          )}
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/help" onClick={toggleMenu}>Help</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          {isLoggedIn ? (
            <button onClick={() => {handleLogout(); toggleMenu();}}>Logout</button>
          ) : (
            <Link to="/login" onClick={toggleMenu}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
