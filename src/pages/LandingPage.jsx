import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedSection from '../components/home/FeaturedSection';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <Categories />
            <FeaturedSection />
        </div>
    );
};

export default LandingPage;
