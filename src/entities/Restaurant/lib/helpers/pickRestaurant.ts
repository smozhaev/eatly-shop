import { IRestaurantData, IPickedRestaurantData } from '../../model/types';
export const pickRestaurantData = (
    restaurant: IRestaurantData
): IPickedRestaurantData => ({
    image: restaurant.image,
    name: restaurant.name,
    category: restaurant.category,
    time: restaurant.time,
    rating: restaurant.rating,
});
