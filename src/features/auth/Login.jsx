/* eslint-disable react/no-unescaped-entities */
import { useLogin } from "./useLogin";

const Login = () => {
  const { email, setEmail, password, setPassword, errorMsg, loading, handleLogin } = useLogin();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-4 bg-white text-black p-8 rounded-xl shadow-xl border">
        <h1 className="text-3xl font-bold text-center text-indigo-700">Login</h1>
        {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="p-3 border rounded w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className="p-3 border rounded w-full"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded font-bold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="text-center text-sm text-black">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 font-bold">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
