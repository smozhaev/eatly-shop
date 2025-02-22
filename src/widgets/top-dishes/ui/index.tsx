import { DishCard, getTagColors, pickDishData } from '@entities/Dish';
import styles from './styles.module.scss';

import { LikeProduct } from '@features/like-product';
import { PriceWithAddToCart } from '@features/price-with-add-to-cart';
import { SeparatorLine } from '@shared/ui';
import { ViewAllButton } from '@features/view-all-button';
import { useTopDishes } from '../model/useTopDishes';

export const TopDishes = () => {
    const { dishes, loading } = useTopDishes();
    return (
        <section className={styles.top_restaurants}>
            <h3 className={styles.top_restaurants__title}>
                Our Top{' '}
                <span className={styles.top_restaurants__title__span}>
                    Dishes
                </span>
            </h3>
            <ul className={styles.top_restaurants__list}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    dishes.map((dish) => {
                        const pickedData = pickDishData(dish);
                        const { color, backgroundColor } = getTagColors(
                            dish.category.toLowerCase()
                        );

                        return (
                            <li key={dish.id}>
                                <DishCard
                                    topFeature={<LikeProduct />}
                                    bottomFeature={
                                        <PriceWithAddToCart
                                            price={dish.price}
                                            addFunc={() => {}}
                                            removeFunc={() => {}}
                                        />
                                    }
                                    categoryStyle={{ color, backgroundColor }}
                                    data={pickedData}
                                />
                            </li>
                        );
                    })
                )}
            </ul>

            <div className={styles.view_all__container}>
                <ViewAllButton link="/menu" />
            </div>

            <SeparatorLine />
        </section>
    );
};
