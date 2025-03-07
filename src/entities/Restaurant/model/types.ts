export interface IPickedRestaurantData {
    image: string;
    name: string;
    category: string;
    time: number;
    rating: number;
}

export interface IRestaurantData {
    id: string;
    name: string;
    description: string;
    category: string;
    time: number;
    rating: number;
    image: string;
}

export interface IRestaurantCard {
    bottomFeature?: React.ReactNode;
    categoryStyle?: {
        color: string;
        backgroundColor: string;
    };
    data: IPickedRestaurantData;
}
