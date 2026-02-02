import mockData from '../data/mockData.json';

// Simulate async API call
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
    getRestaurants: async () => {
        await delay(500);
        return mockData.restaurants;
    },
    getCategories: async () => {
        await delay(500);
        return mockData.categories;
    },
    getOffers: async () => {
        await delay(500);
        return mockData.offers;
    },
    getMenuItems: async (restaurantId) => {
        await delay(500);
        if (restaurantId) {
            return mockData.menuItems.filter(item => item.restaurantId === Number(restaurantId));
        }
        return mockData.menuItems;
    }
};
