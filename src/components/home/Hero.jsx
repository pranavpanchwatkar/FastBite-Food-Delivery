import React from 'react';
import Button from '../common/Button';
import { Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-[650px] flex items-center justify-center bg-gray-900 overflow-hidden mt-10 mx-auto max-w-7xl rounded-3xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ duration: 1.5 }}
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"
                    alt="Delicious Food"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                >
                    Delicious food, delivered <br />
                    to your door
                </motion.h1>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Order from the best local restaurants near you. Fast delivery, <br /> fresh meals.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="bg-white p-2 pl-6 rounded-full shadow-2xl flex items-center max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300"
                >
                    <div className="text-primary pr-3">
                        <Utensils className="w-6 h-6" />
                    </div>
                    <input
                        type="text"
                        placeholder="What are you craving?"
                        className="flex-grow py-3 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0 focus:border-none text-lg"
                    />
                    <Button className="!px-8 !py-3 !rounded-full !bg-primary !text-white !font-bold">Find Food</Button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
