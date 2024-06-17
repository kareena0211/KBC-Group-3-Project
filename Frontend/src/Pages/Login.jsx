import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login successful:", response.data);
      toast.success("Login successful!");
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center p-6 bg-slate-300 min-h-screen">
      <ToastContainer />
      <div className="container max-w-md mx-auto p-8 shadow-lg rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 transition duration-300"
          >
            Login
          </button>
          <p>
            Create an account{" "}
            <Link
              to="/signup"
              className="text-blue-700 underline font-semibold"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
