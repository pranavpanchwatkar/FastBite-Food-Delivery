import React, { useEffect } from 'react';
import { X, ShoppingBag, Star } from 'lucide-react';
import Button from './Button';

const DishModal = ({ dish, isOpen, onClose }) => {
    if (!isOpen || !dish) return null;

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors bg-white/20 text-white hover:bg-white/30 md:bg-gray-100 md:text-gray-500 md:hover:bg-gray-200"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col">
                        <div className="mb-auto">
                            <div className="flex items-center justify-between mb-2">
                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wide">
                                    {dish.category}
                                </span>
                                {dish.popular && (
                                    <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span>Popular</span>
                                    </div>
                                )}
                            </div>

                            <h2 className="text-2xl font-bold text-secondary mb-2">{dish.name}</h2>
                            <p className="text-3xl font-extrabold text-primary mb-6">₹{dish.price}</p>

                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Description</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {dish.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <Button className="w-full flex items-center justify-center gap-2 text-lg !py-3">
                                <ShoppingBag className="w-5 h-5" />
                                Add to Order
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishModal;
