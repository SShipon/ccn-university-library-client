import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("student-info");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("student-info");
    setUser(null);
    navigate("/");
    window.location.reload(); // Optional, if needed to reload app state
  };

  const isLoggedIn = !!localStorage.getItem("access-token");

  return (
    <nav className={`w-full ${darkMode ? "bg-gray-900" : "bg-blue-700"} text-white`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to="/" className="font-bold text-xl">📚 UST Library</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/books" className="hover:text-yellow-300">Books</Link>

          {/* Only student can see Book Post */}
          {user?.role === "student" && (
            <Link to="/add-books" className="hover:text-yellow-300">Books Post</Link>
          )}

          {/* Only admin can see Dashboard */}
          {user?.role === "admin" && (
            <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
          )}

          {/* Admin can also post books if needed */}
          {user?.role === "admin" && (
            <Link to="/add-books" className="hover:text-yellow-300">Books Post</Link>
          )}

          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>

        {/* Right side buttons */}
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

          {/* Mobile menu toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`flex flex-col gap-4 p-4 ${darkMode ? "bg-gray-800" : "bg-blue-600"} md:hidden`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/books" onClick={toggleMenu}>Books</Link>

          {user?.role === "student" && (
            <Link to="/add-books" onClick={toggleMenu}>Books Post</Link>
          )}

          {user?.role === "admin" && (
            <>
              <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
              <Link to="/add-books" onClick={toggleMenu}>Books Post</Link>
            </>
          )}

          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>

          {isLoggedIn ? (
            <button onClick={() => { handleLogout(); toggleMenu(); }}>
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={toggleMenu}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
