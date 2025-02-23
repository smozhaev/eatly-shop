import styles from './styles.module.scss';
import { AddButton } from '@shared/ui/buttons/add-button';
import { IPriceWithAddToCart } from '../model/types';
import { usePriceWithCart } from '../model/usePriceWithCard';

export const PriceWithAddToCart: React.FC<IPriceWithAddToCart> = ({
    price,
    addFunc,
    removeFunc,
}) => {
    const {
        setFirstAddButton,
        handleMinus,
        handlePlus,
        dollars,
        cents,
        count,
        firstAddButton,
    } = usePriceWithCart(price);

    return (
        <div className={styles.price_with_add_to_cart}>
            <p className={styles.price_with_add_to_cart__text}>
                ${dollars}
                <span className={styles.price_with_add_to_cart__text__span}>
                    .{cents}
                </span>
            </p>
            {firstAddButton ? (
                <AddButton
                    onClick={() => setFirstAddButton(false)}
                    buttonStyle={styles.price_with_add_to_cart__button}
                >
                    +
                </AddButton>
            ) : (
                <div className={styles.add_to_cart__container}>
                    <AddButton
                        onClick={() => handleMinus(removeFunc)}
                        buttonStyle={styles.add_to_cart__button}
                    >
                        -
                    </AddButton>
                    <p className={styles.add_to_cart__count}>
                        {count > 9 ? count : `0${count}`}
                    </p>
                    <AddButton
                        onClick={() => handlePlus(addFunc)}
                        buttonStyle={styles.add_to_cart__button}
                    >
                        +
                    </AddButton>
                </div>
            )}
        </div>
    );
};
