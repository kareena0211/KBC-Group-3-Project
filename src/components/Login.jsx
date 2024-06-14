"use client"
import { useState } from 'react';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        const errors = {};
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                console.log('Logging in...', formData);
                setSuccessMessage('Login successful!');
                setTimeout(() => {
                    console.log('Redirecting to dashboard...');
                }, 2000);
                setFormData({
                    email: '',
                    password: ''
                });
            } catch (error) {
                setErrorMessage('Login failed. Please try again.');
                console.error('Login error:', error);
            }
        }
    };

    return (
        <div className='bg-gray-800 flex justify-center items-center h-screen'>
            <div className="container max-w-md mx-auto p-8 border border-gray-300 rounded bg-white">
                <h1 className="text-2xl text-center mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        />
                        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        />
                        {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer hover:bg-blue-700">Login</button>
                </form>
                {successMessage && <div className="text-green-500 text-sm mt-4">{successMessage}</div>}
                {errorMessage && <div className="text-red-500 text-sm mt-4">{errorMessage}</div>}
            </div>
        </div>
    );
};

export default Login;
