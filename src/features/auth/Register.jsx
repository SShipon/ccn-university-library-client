/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); 
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // 
    // https://ccn-university-library-server.onrender.com
      const response = await axios.post("https://ccn-university-library-server.onrender.com", {
        name,
        email,
        password,
      });

      // যদি সফল হয়
      setSuccess("Registration successful! Please login.");
      setName("");
      setEmail("");
      setPassword("");
      navigate('/login'); 
    } catch (err) {
      // Error handling
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-xl border"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700">
          Create an Account
        </h1>

        {error && (
          <p className="text-red-600 text-center font-semibold">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-center font-semibold">{success}</p>
        )}

        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Full Name
          </label>
          <input
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email Address
          </label>
          <input
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            type="email"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-indigo-600"
          } text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition`}
        >
          {loading ? "Registering..." : "Register Now"}
        </button>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-700 font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
