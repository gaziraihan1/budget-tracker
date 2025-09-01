import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Alert from "../../Components/Alert/Alert";
import { useProfileContext } from "../../context/ProfileContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const { refetch } = useProfileContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginDetails = { email, password };

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginDetails),
        credentials: "include",
      });
      const data = await res.json();

      if (res.ok) {
        await refetch();
      }
      if (res.status === 200) {
        navigate("/");
      } else if (res.status === 400) {
        setAlert({ show: true, message: data.message, type: "error" });
      } else if (res.status === 500) {
        setAlert({
          show: true,
          message: data.error || "Login failed!",
          type: "error",
        });
      }
      else if (res.status === 403){
        setAlert({show: true, message: "Network issue!", type: 'error'})
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Please login to continue
        </p>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                         focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                         focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg 
                       hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
      {alert.show && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
    </div>
  );
};

export default Login;
