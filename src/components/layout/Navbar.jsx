import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Button from '../common/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">moped</span>
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-secondary italic">FastBite</span>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/" className="text-secondary font-semibold hover:text-primary transition-colors">Home</a>
                        <a href="/menu" className="text-secondary font-semibold hover:text-primary transition-colors">Menu</a>
                        <a href="/signup" className="text-secondary font-semibold hover:text-primary transition-colors">Sign Up</a>
                        <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2">
                            <span className="font-bold">Cart</span>
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Home</a>
                        <a href="/menu" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Menu</a>
                        <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Login</a>
                        <a href="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Sign Up</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
