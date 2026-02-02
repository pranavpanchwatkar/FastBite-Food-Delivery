import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-orange-600 focus:ring-primary shadow-lg shadow-orange-500/30",
        secondary: "bg-white text-secondary border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
        outline: "bg-transparent text-white border-2 border-white hover:bg-white/10"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
