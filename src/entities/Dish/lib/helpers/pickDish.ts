import { IData } from "./types";
export const pickDishData = (dish: any): IData => ({
    image: dish.image,
    name: dish.name,
    category: dish.category,
    time: dish.time,
    rating: dish.rating,
});
  