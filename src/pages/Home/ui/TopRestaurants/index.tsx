import styles from './styles.module.scss';
import { SeparatorLine } from '@shared/ui';

export const TopRestaurant = () => {
    return (
        <section className={styles.top_restaurants}>
            <h3 className={styles.top_restaurants__title}>
                Our Top{' '}
                <span className={styles.top_restaurants__title__span}>
                    Restaurants
                </span>
            </h3>
            {/* <ul className={styles.top_restaurants__list}>
                <li>
                    <DishCard />
                </li>
                <li>
                    <DishCard />
                </li>
                <li>
                    <DishCard />
                </li>
                <li>
                    <DishCard />
                </li>
                <li>
                    <DishCard />
                </li>
            </ul> */}
            <SeparatorLine />
        </section>
    );
};
