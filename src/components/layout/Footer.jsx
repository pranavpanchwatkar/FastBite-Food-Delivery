import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">moped</span>
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-secondary italic">FastBite</span>
                        </div>
                        <p className="text-gray-500 leading-relaxed">
                            Delivering happiness to your doorstep with the best food from local restaurants. Fast, fresh, and reliable.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-secondary">About</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-secondary">Support</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Safety Center</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-secondary">Get in Touch</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li>123 Food Street, Tasty City</li>
                            <li>support@fastbite.com</li>
                            <li>+91 9876543210</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© 2026 FastBite Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        {/* Social icons placeholders */}
                        <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
