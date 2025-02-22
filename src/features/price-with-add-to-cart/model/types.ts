export interface IPriceWithAddToCart {
    price: number;
    addFunc?: () => void;
    removeFunc?: () => void;
}

export interface PriceCartState {
    price: number;
    count: number;
    totalPrice: number;
    firstAddButton: boolean;
}

// Пропсы для компонента AddButton
export interface AddButtonProps {
    onClick: () => void;
    buttonStyle: string;
    label: string;
}

// Пропсы для компонента PriceDisplay
export interface PriceDisplayProps {
    dollars: number;
    cents: string;
}
