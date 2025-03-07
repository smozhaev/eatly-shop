import { useMemo } from 'react';
import { IRestaurantData, pickRestaurantData } from '@entities/Restaurant';
import { getTagColors } from '@shared/lib';

export const useProcessedTopRestaurants = (restaurants: IRestaurantData[]) => {
    return useMemo(() => {
        return restaurants.map((restaurant) => {
            return {
                ...pickRestaurantData(restaurant),
                id: restaurant.id,
                color: getTagColors(restaurant.category.toLowerCase()).color,
                backgroundColor: getTagColors(restaurant.category.toLowerCase())
                    .backgroundColor,
            };
        });
    }, [restaurants]);
};
