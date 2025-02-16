export interface IDishCard {
    topFeature?: React.ReactNode;
    bottomFeature?: React.ReactNode;
    categoryStyle?: {
        color: string;
        backgroundColor: string;
    };
    data: IData;
}

export interface IData {
    image: string;
    name: string;
    category: string;
    time: string;
    rating: number;
}