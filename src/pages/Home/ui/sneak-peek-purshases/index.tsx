import { CardWrapper, SeparatorLine } from '@shared/ui';
import styles from './styles.module.scss';
import { PurchasesWidget } from '@features/purchases-widget';
import FoodImage from '@shared/assets/png/food-image-1.png';
export const SneakPeekPurshsases = () => {
    return (
        <section className={styles.sneak_peek}>
            <div className={styles.sneak_peek__container}>
                <div className={styles.sneak_peek__info}>
                    <h1 className={styles.sneak_peek__title}>
                        Control{' '}
                        <span className={styles.sneak_peek__span}>
                            Purchases
                        </span>
                        <br /> Via Dashboard
                    </h1>
                    <ul className={styles.sneak_peek__cards}>
                        <li className={styles.sneak_peek__card}>
                            <CardWrapper>
                                <div
                                    className={
                                        styles.sneak_peek__card_container
                                    }
                                >
                                    <div
                                        className={
                                            styles.sneak_peek__image_container
                                        }
                                    >
                                        <img
                                            className={styles.sneak_peek__image}
                                            src={FoodImage}
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className={
                                            styles.sneak_peek__card_inmfo
                                        }
                                    >
                                        <h1>Chicken Hell</h1>
                                        <p>status</p>
                                    </div>
                                    <p className={styles.sneak_peek__card_time}>
                                        13:30
                                    </p>
                                </div>
                            </CardWrapper>
                        </li>
                        <li className={styles.sneak_peek__card}>
                            <CardWrapper>
                                <div
                                    className={
                                        styles.sneak_peek__card_container
                                    }
                                >
                                    <div
                                        className={
                                            styles.sneak_peek__image_container
                                        }
                                    >
                                        <img
                                            className={styles.sneak_peek__image}
                                            src={FoodImage}
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className={
                                            styles.sneak_peek__card_inmfo
                                        }
                                    >
                                        <h1>Chicken Hell</h1>
                                        <p>status</p>
                                    </div>
                                    <p className={styles.sneak_peek__card_time}>
                                        13:30
                                    </p>
                                </div>
                            </CardWrapper>
                        </li>
                        <li className={styles.sneak_peek__card}>
                            <CardWrapper>
                                <div
                                    className={
                                        styles.sneak_peek__card_container
                                    }
                                >
                                    <div
                                        className={
                                            styles.sneak_peek__image_container
                                        }
                                    >
                                        <img
                                            className={styles.sneak_peek__image}
                                            src={FoodImage}
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className={
                                            styles.sneak_peek__card_inmfo
                                        }
                                    >
                                        <h1>Chicken Hell</h1>
                                        <p>status</p>
                                    </div>
                                    <p className={styles.sneak_peek__card_time}>
                                        13:30
                                    </p>
                                </div>
                            </CardWrapper>
                        </li>
                    </ul>
                </div>
                <div className={styles.dropdown_controlled_widget}>
                    <CardWrapper>
                        <PurchasesWidget />
                    </CardWrapper>
                </div>
            </div>
            <SeparatorLine />
        </section>
    );
};
