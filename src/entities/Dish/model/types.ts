export interface IPickedData {
    image: string;
    name: string;
    category: string;
    time: number;
    rating: number;
}

export interface IDishData {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    time: number;
    rating: number;
    availability: boolean;
    image: string;
}

export interface IDishCard {
    topFeature?: React.ReactNode;
    bottomFeature?: React.ReactNode;
    categoryStyle?: {
        color: string;
        backgroundColor: string;
    };
    data: IPickedData;
}
