import { useMemo } from 'react';
import { IDishData, pickDishData } from '@entities/Dish';
import { getTagColors } from '@shared/lib/helpers';

export const useProcessedTopDishes = (dishes: IDishData[]) => {
    return useMemo(() => {
        return dishes.map((dish) => {
            return {
                ...pickDishData(dish),
                id: dish.id,
                price: dish.price,
                color: getTagColors(dish.category.toLowerCase()).color,
                backgroundColor: getTagColors(dish.category.toLowerCase())
                    .backgroundColor,
            };
        });
    }, [dishes]);
};
