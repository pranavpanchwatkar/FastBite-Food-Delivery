import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../services/api';
import Button from '../components/common/Button';
import DishModal from '../components/common/DishModal';
import { Search, Filter, Star, Plus } from 'lucide-react';

const MenuPage = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDish, setSelectedDish] = useState(null);
    const location = useLocation();

    useEffect(() => {
        api.getMenuItems().then(setItems);
        api.getCategories().then(setCategories);

        const params = new URLSearchParams(location.search);
        const categoryParam = params.get('category');
        if (categoryParam) {
            setActiveCategory(categoryParam);
        }
    }, [location.search]);

    const filteredItems = items.filter(item => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;

        // Real implementation would look like: 
        // item.category === activeCategory

        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-24 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header & Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-secondary mb-2">Our Menu</h1>
                        <p className="text-gray-500">Discover the best food from over 1,000 restaurants</p>
                    </div>

                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative flex-grow md:flex-grow-0">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search food..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                            />
                        </div>
                        <button className="p-2 border border-gray-200 rounded-full bg-white hover:bg-gray-50">
                            <Filter className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Categories Tabs */}
                <div className="flex gap-4 overflow-x-auto pb-6 mb-8 scrollbar-hide">
                    <button
                        onClick={() => setActiveCategory('All')}
                        className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors font-medium border ${activeCategory === 'All' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}
                    >
                        All
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors font-medium border ${activeCategory === cat.name ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredItems.map(item => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedDish(item)}
                            className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                {item.popular && (
                                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-sm">Popular</span>
                                )}
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-secondary line-clamp-1" title={item.name}>{item.name}</h3>
                                <span className="font-bold text-primary">₹{item.price}</span>
                            </div>

                            <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">{item.description}</p>

                            <div className="mt-auto">
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Add to cart logic here
                                    }}
                                    className="w-full flex items-center justify-center gap-2 !py-2"
                                >
                                    <Plus className="w-4 h-4" /> Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <DishModal
                dish={selectedDish}
                isOpen={!!selectedDish}
                onClose={() => setSelectedDish(null)}
            />
        </div>
    );
};

export default MenuPage;
