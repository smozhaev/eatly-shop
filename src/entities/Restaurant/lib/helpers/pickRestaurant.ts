import { IRestauranthData, IPickedRestaurantData } from '../../model/types';
export const pickRestaurantData = (
    restaurant: IRestauranthData
): IPickedRestaurantData => ({
    image: restaurant.image,
    name: restaurant.name,
    category: restaurant.category,
    time: restaurant.time,
    rating: restaurant.rating,
});
