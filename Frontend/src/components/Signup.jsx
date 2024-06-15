import { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.trim().length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        formData.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("Signing up...", formData);
        console.log("Sending welcome email to:", formData.email);
        setSuccessMessage("Signup successful!");
        setTimeout(() => {
          console.log("Redirecting to post list screen...");
        }, 2000);
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        });
      } catch (error) {
        setErrorMessage("Signup failed. Please try again.");
        console.error("Signup error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center p-6 bg-slate-300 min-h-screen">
      <div className="container max-w-md mx-auto p-8 shadow-lg rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Signup
        </h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
            {errors.username && (
              <div className="text-red-500 text-sm mt-1">{errors.username}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
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
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              id="terms"
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-700">
              I agree to the terms and conditions
            </label>
            {errors.terms && (
              <div className="text-red-500 text-sm mt-1">{errors.terms}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 transition duration-300"
          >
            Signup
          </button>
          <p>
            Already have an account <Link to="/login" className="text-blue-700 underline font-semibold">Login</Link>
          </p>



          {/* ------------------------- */}
        </form>
        {successMessage && (
          <div className="text-green-500 text-sm mt-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default Signup;
