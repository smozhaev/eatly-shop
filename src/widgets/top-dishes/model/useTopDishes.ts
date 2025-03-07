import { useState, useEffect } from 'react';
import { IDishData } from '@entities/Dish';
import { MOCK_DISH_DATA } from '@shared/const';

export const useTopDishes = () => {
    const [dishes, setDishes] = useState<IDishData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const dishes = MOCK_DISH_DATA;
            setDishes(dishes);
            setLoading(false);
        }, 1000);
    }, []);

    return { dishes, loading };
};
