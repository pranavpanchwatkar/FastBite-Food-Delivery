import React, { useState } from 'react';
import Button from '../components/common/Button';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ initialMode = 'login' }) => {
    const [isLogin, setIsLogin] = useState(initialMode !== 'signup');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const { login, signup } = useAuth();
    const navigate = useNavigate();

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setError('');
        setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (isLogin) {
                await login(formData.email, formData.password);
            } else {
                if (formData.password !== formData.confirmPassword) {
                    setError("Passwords do not match");
                    return;
                }
                await signup(formData.fullName, formData.email, formData.password);
            }
            navigate('/');
        } catch (err) {
            setError(err.message || "An error occurred");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] m-8">

                {/* Left Side - Image/Brand (Hidden on mobile) */}
                <div className="hidden md:flex w-1/2 bg-gray-900 relative overflow-hidden items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <motion.img
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.6 }}
                            transition={{ duration: 1.5 }}
                            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80"
                            alt="Foodie Background"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-12 text-white">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            {/* FastBite Logo */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-primary backdrop-blur-sm">
                                <span className="material-symbols-outlined text-3xl">moped</span>
                            </div>
                            <span className="font-bold text-4xl tracking-tight italic">FastBite</span>
                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? 'login-text' : 'signup-text'}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold mb-4">
                                    {isLogin ? "Welcome Back!" : "Join the Foodie Family"}
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {isLogin
                                        ? "Log in to access your saved restaurants, favorites, and track your orders in real-time."
                                        : "Discover the best local food, get exclusive deals, and experience super-fast delivery."}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white relative">
                    <button
                        onClick={() => navigate('/')}
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="max-w-sm mx-auto w-full">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{isLogin ? "Sign In" : "Create Account"}</h3>
                            <p className="text-gray-500">
                                {isLogin ? "Please enter your details to sign in." : "Enter your details to get started."}
                            </p>
                        </div>

                        {error && (
                            <div className="mb-4 p-3 bg-red-50 text-red-500 text-sm rounded-lg flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">error</span>
                                {error}
                            </div>
                        )}

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {!isLogin && (
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                            required={!isLogin}
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="name@example.com"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {!isLogin && (
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                            required={!isLogin}
                                        />
                                    </div>
                                </div>
                            )}

                            {isLogin && (
                                <div className="flex justify-between items-center text-sm">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                        <span className="text-gray-600">Remember me</span>
                                    </label>
                                    <a href="#" className="text-primary font-semibold hover:underline">Forgot Password?</a>
                                </div>
                            )}

                            <motion.div whileTap={{ scale: 0.95 }}>
                                <Button className="w-full flex justify-center items-center gap-2 !py-3.5 !text-lg !font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98]">
                                    {isLogin ? "Sign In" : "Sign Up"} <ArrowRight className="w-5 h-5" />
                                </Button>
                            </motion.div>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <p className="text-gray-500">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                                <button onClick={toggleMode} className="ml-2 text-primary font-bold hover:underline">
                                    {isLogin ? "Sign Up" : "Log In"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;
