import { IDishData, IPickedData } from '../../model/types';
export const pickDishData = (dish: IDishData): IPickedData => ({
    image: dish.image,
    name: dish.name,
    category: dish.category,
    time: dish.time,
    rating: dish.rating,
});
