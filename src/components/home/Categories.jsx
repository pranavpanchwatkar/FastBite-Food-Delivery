import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.getCategories().then(data => setCategories(data));
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-bold text-secondary">Popular Categories</h2>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full border border-gray-100 hover:bg-gray-50 hover:text-primary transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full border border-gray-100 hover:bg-gray-50 hover:text-primary transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((category) => (
                        <Link to={`/menu?category=${category.name}`} key={category.id} className="group cursor-pointer flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 border-4 border-white">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">{category.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
