import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
    const [isSignUpMode, setIsSignUpMode] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const endPoint = isSignUpMode ? 'http://localhost:5000/api/auth/signup' : 'http://localhost:5000/api/auth/login'

        try {
            const response = await fetch(endPoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data);

            if (!response.ok) {
                throw new Error(data.message || "something went Wrong")
            }

            if (!isSignUpMode) {
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
            } else {
                alert('Account created successfully! Please login.');
                setIsSignUpMode(false);
                setLoading(false);
                return;
            }
            onLoginSuccess(); 
            onClose();
        } catch (error) {
            console.log(error.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-10 overflow-hidden"
            >
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-black text-xl transition"
                >
                    <FiX />
                </button>

                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#3a3a3a]">
                        {isSignUpMode ? "Create Account" : "Welcome Back"}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        {isSignUpMode ? "Please enter your details to sign up" : "Please enter your details to login"}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {isSignUpMode && (
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-600">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition"
                            />
                        </div>
                    )}

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-600">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] transition"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md "
                    >
                        {loading ? "Processing..." :
                            (isSignUpMode ? "Sign Up" : "Login")}
                    </button>
                </form>

                <div className="text-center mt-6 text-sm text-gray-600">
                    {isSignUpMode ? (
                        <p>
                            Already have an account?{" "}
                            <button
                                onClick={() => setIsSignUpMode(false)}
                                className="text-[#B8860B] font-semibold hover:underline"
                            >
                                Login
                            </button>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{" "}
                            <button
                                onClick={() => setIsSignUpMode(true)}
                                className="text-[#B8860B] font-semibold hover:underline"
                            >
                                Sign Up
                            </button>
                        </p>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default AuthModal;