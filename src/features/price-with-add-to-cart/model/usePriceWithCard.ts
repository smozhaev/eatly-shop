import { useEffect, useState } from "react";
import { PriceCartState } from "./types";
import { calculatePrice } from '../lib/priceUtils'

export const usePriceWithCart = (initialPrice: number) => {
    const [state, setState] = useState<PriceCartState>({
        price: initialPrice,
        count: 1,
        totalPrice: initialPrice,
        firstAddButton: true
    });

    useEffect(() => {
        setState((prev) => ({
            ...prev,
            totalPrice: prev.price * prev.count
        }));
    }, [state.price, state.count]);

    const handleMinus = (removeFunc: (() => void) | undefined) => {
        if (state.count === 1) {
            setState((prev) => ({ ...prev, firstAddButton: true }));
            removeFunc;
        } else {
            setState((prev) => ({ ...prev, count: prev.count - 1 }));
        }
    };

    const handlePlus = (addFunc: (() => void) | undefined) => {
        setState((prev) => ({ ...prev, count: prev.count + 1 }));
        addFunc;
    };

    const { dollars, cents } = calculatePrice(state.price, state.count);

    return {
        firstAddButton: state.firstAddButton,
        setFirstAddButton: (value: boolean) => setState((prev) => ({ ...prev, firstAddButton: value })),
        count: state.count,
        handleMinus,
        handlePlus,
        dollars,
        cents
    };
};