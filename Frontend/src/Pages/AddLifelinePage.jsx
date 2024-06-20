import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddLifelinePage = () => {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "name is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("Signing up...", formData);
        setSuccessMessage("Signup successful!");
        navigate("/");
        setTimeout(() => {
          console.log("Redirecting to post list screen...");
        }, 2000);
        console.log(formData);
        setFormData({
          name: "",
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
          Add Lifeline
        </h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
            {errors.name && (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            )}
          </div>


          

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 transition duration-300"
          >
            Add Lifeline
          </button>

          {/* ------------------------- */}
        </form>
      </div>
    </div>
  );
};

export default AddLifelinePage;
