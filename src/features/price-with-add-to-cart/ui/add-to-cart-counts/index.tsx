import styles from './styles.module.scss';

export const AddToCartCounts: React.FC<{ count: number }> = ({ count }) => {
    return (
        <div>
            <button className={styles.price_with_add_to_cart__button}>-</button>
            <p>{count}</p>
            <button className={styles.price_with_add_to_cart__button}>+</button>
        </div>
    );
};
