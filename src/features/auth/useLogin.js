import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./authService";

export const useLogin = () => {
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
      const { user, token } = await loginUser({ email, password });
      if (token) {
        localStorage.setItem("access-token", token);
        localStorage.setItem("user-info", JSON.stringify(user));
        navigate(user.role === "admin" ? "/dashboard" : "/");
        window.location.reload();
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    loading,
    handleLogin,
  };
};
