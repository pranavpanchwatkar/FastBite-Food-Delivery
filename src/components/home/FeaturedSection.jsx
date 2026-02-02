import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Button from '../common/Button';
import { Star, Clock, Truck } from 'lucide-react';

const FeaturedSection = () => {
    const [offers, setOffers] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        api.getOffers().then(setOffers);
        api.getRestaurants().then(setRestaurants);
    }, []);

    const getGradient = (id) => {
        const gradients = {
            1: "bg-gradient-to-r from-orange-600 to-red-600",
            2: "bg-gradient-to-r from-green-600 to-teal-600",
            3: "bg-gradient-to-r from-gray-900 to-gray-800"
        };
        return gradients[id] || "bg-primary";
    };

    return (
        <div className="bg-gray-50 pb-20">

            {/* Offers Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-secondary">Today's Offers</h2>
                    <p className="text-gray-500 mt-2">Don't miss out on these limited time deals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div key={offer.id} className={`rounded-2xl p-8 text-white relative overflow-hidden shadow-lg ${getGradient(offer.id)} flex flex-col justify-center h-64`}>
                            <div className="relative z-10 w-2/3">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                                    {offer.code}
                                </span>
                                <h3 className="text-3xl font-extrabold mb-2 leading-tight">{offer.title}</h3>
                                <p className="text-white/90 mb-6 font-medium">{offer.description}</p>
                                <Button variant="secondary" className="!py-2 !px-5 text-sm font-bold shadow-lg">Claim Now</Button>
                            </div>
                            {/* Decorative Image */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white/10">
                                <img src={offer.image} alt="Offer" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trending Restaurants Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-bold text-secondary">Trending Restaurants </h2>
                    <a href="/menu" className="text-primary font-semibold hover:underline">View all</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {restaurants.map(place => (
                        <div key={place.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative h-48">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                    <span className="text-sm font-bold text-gray-800">{place.deliveryTime}</span>
                                </div>
                                {place.id === 3 && (
                                    <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        BOGO Free
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-secondary leading-tight">{place.name}</h3>
                                    <div className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded text-green-800 text-xs font-bold">
                                        <Star className="w-3 h-3 fill-current" />
                                        {place.rating}
                                    </div>
                                </div>

                                <p className="text-gray-500 text-sm mb-4 truncate">
                                    {place.categories.join(' • ')}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium border-t border-gray-100 pt-4">
                                    <div className="flex items-center gap-1">
                                        <Truck className="w-4 h-4" />
                                        Free delivery
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        Min ₹{place.minOrder}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default FeaturedSection;
