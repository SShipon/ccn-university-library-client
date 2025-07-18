import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
         //https://ccn-university-library-server.onrender.com
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const { user, token } = response.data;

      if (token) {
        // Save to localStorage
        localStorage.setItem("access-token", token);
        localStorage.setItem("user-info", JSON.stringify(user));

        // Redirect
        if (user?.role === "admin") navigate("/dashboard");
        else navigate("/");

        window.location.reload();
      }

    } catch (error) {
      setErrorMsg(error.response?.data?.error || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-4 bg-white p-8 rounded-xl shadow-xl border">
        <h1 className="text-3xl font-bold text-center text-indigo-700">Login to Your Account</h1>

        {errorMsg && <p className="text-red-600 text-center font-semibold">{errorMsg}</p>}

        <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="p-3 text-black border rounded-lg w-full" />
        <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="p-3 text-black border rounded-lg w-full" />

        <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">
          {loading ? "Logging in..." : "Login Now"}
        </button>
         <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/register" className="text-indigo-700 font-semibold hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
