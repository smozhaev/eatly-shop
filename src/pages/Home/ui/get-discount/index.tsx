import { ReusableButton } from '@shared/ui';
import styles from './styles.module.scss';
import FoodImage from '@shared/assets/png/food-image-2.png';

export const GetDiscount = () => {
    return (
        <section className={styles.get_discount__container}>
            <div className={styles.get_discount}>
                <h1 className={styles.get_discount__title}>GET 50%</h1>
                <form className={styles.get_discount__form}>
                    <input
                        className={styles.get_discount__form__input}
                        type="text"
                        placeholder=" Enter Your Email Address"
                    />
                    <ReusableButton
                        onClickFunction={() => {}}
                        buttonStyle={styles.get_discount__form__button}
                    >
                        Subscribe
                    </ReusableButton>
                </form>
                <img
                    className={styles.get_discount__image}
                    src={FoodImage}
                ></img>
            </div>
        </section>
    );
};
