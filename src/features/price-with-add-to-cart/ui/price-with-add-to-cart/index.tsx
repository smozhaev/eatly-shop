import { useState } from 'react';
// import { AddToCartCounts } from '../add-to-cart-counts';
import styles from './styles.module.scss';

export const PriceWithAddToCart: React.FC<{ price: number }> = ({ price }) => {
    const dollars = Math.floor(price);
    const cents = (price % 1).toFixed(2).substring(2);
    const [plusState, setPlusState] = useState(true);
    const [count, setCount] = useState(1);
    return (
        <div className={styles.price_with_add_to_cart}>
            <p className={styles.price_with_add_to_cart__text}>
                ${dollars}
                <span className={styles.price_with_add_to_cart__text__span}>
                    .{cents}
                </span>
            </p>
            {plusState ? (
                <button
                    onClick={() => setPlusState(false)}
                    className={styles.price_with_add_to_cart__button}
                >
                    +
                </button>
            ) : (
                <div className={styles.add_to_cart__container}>
                    <button
                        onClick={() =>
                            count === 0
                                ? setPlusState(true)
                                : setCount((count) => count - 1)
                        }
                        className={styles.add_to_cart__button}
                    >
                        -
                    </button>
                    <p>{count}</p>
                    <button
                        onClick={() => setCount((count) => count + 1)}
                        className={styles.add_to_cart__button}
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
};
