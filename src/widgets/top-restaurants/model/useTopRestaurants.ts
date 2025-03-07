import { useState, useEffect } from 'react';
import { MOCK_RESTAURANT_DATA } from '@shared/const';
import { IRestaurantData } from '@entities/Restaurant';

export const useTopRestaurants = () => {
    const [restaurants, setRestaurants] = useState<IRestaurantData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const restaurants = MOCK_RESTAURANT_DATA;
            setRestaurants(restaurants);
            setLoading(false);
        }, 1000);
    }, []);

    return { restaurants, loading };
};
