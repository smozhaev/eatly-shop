import { DishCard, getTagColors, pickDishData } from '@entities/Dish';
import styles from './styles.module.scss';
import foodImage1 from '@shared/assets/png/food-image-1.png';
import foodImage2 from '@shared/assets/png/food-image-2.png';
import foodImage3 from '@shared/assets/png/food-image-3.png';

import { LikeProduct } from '@features/like-product';
import { PriceWithAddToCart } from '@features/price-with-add-to-cart';
import { SeparatorLine } from '@shared/ui';
import { ViewAllButton } from '@features/view-all-button';

const dish = [
    {
        id: '553d327a-57b2-4359-b054-fc11bb0e563c',
        name: 'Chiken Hell',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie arcu dictum quam luctus egestas. Nullam id elementum quam. Vivamus nec arcu id nisl auctor scelerisque sit amet accumsan ipsum. Sed ac dolor et turpis volutpat fermentum. Donec non pulvinar justo. Etiam gravida posuere libero ac posuere. Suspendisse potenti. Aenean. ',
        category: 'Healthy',
        price: 12.99,
        time: 24,
        rating: 4.9,
        availability: true,
        image: foodImage1,
    },
    {
        id: '8c25ef7e-4fdd-43bd-8741-051abf5c3fba',
        name: 'Swe Dish',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie arcu dictum quam luctus egestas. Nullam id elementum quam. Vivamus nec arcu id nisl auctor scelerisque sit amet accumsan ipsum. Sed ac dolor et turpis volutpat fermentum. Donec non pulvinar justo. Etiam gravida posuere libero ac posuere. Suspendisse potenti. Aenean. ',
        category: 'Supreme',
        price: 19.99,
        time: 20,
        rating: 4.9,
        availability: true,
        image: foodImage2,
    },
    {
        id: '5f179117-6df9-4b0c-9ef2-81417f192fc3',
        name: 'Swe Dish',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie arcu dictum quam luctus egestas. Nullam id elementum quam. Vivamus nec arcu id nisl auctor scelerisque sit amet accumsan ipsum. Sed ac dolor et turpis volutpat fermentum. Donec non pulvinar justo. Etiam gravida posuere libero ac posuere. Suspendisse potenti. Aenean. ',
        category: 'Trending',
        price: 15.99,
        time: 35,
        rating: 4.7,
        availability: true,
        image: foodImage3,
    },
    {
        id: 'bad3a5fa-c24e-497c-bba4-a55b6a827d77',
        name: 'Chiken Hell',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie arcu dictum quam luctus egestas. Nullam id elementum quam. Vivamus nec arcu id nisl auctor scelerisque sit amet accumsan ipsum. Sed ac dolor et turpis volutpat fermentum. Donec non pulvinar justo. Etiam gravida posuere libero ac posuere. Suspendisse potenti. Aenean. ',
        category: 'Healthy',
        price: 12.99,
        time: 24,
        rating: 4.9,
        availability: true,
        image: foodImage1,
    },
    {
        id: 'ec07f2ee-5307-43c9-a9c0-b2b854840920',
        name: 'Swe Dish',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie arcu dictum quam luctus egestas. Nullam id elementum quam. Vivamus nec arcu id nisl auctor scelerisque sit amet accumsan ipsum. Sed ac dolor et turpis volutpat fermentum. Donec non pulvinar justo. Etiam gravida posuere libero ac posuere. Suspendisse potenti. Aenean. ',
        category: 'Supreme',
        price: 12.99,
        time: 24,
        rating: 4.9,
        availability: true,
        image: foodImage2,
    },
];

export const TopDishes = () => {
    return (
        <section className={styles.top_restaurants}>
            <h3 className={styles.top_restaurants__title}>
                Our Top{' '}
                <span className={styles.top_restaurants__title__span}>
                    Dishes
                </span>
            </h3>
            <ul className={styles.top_restaurants__list}>
                {dish.map((dish) => {
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
                })}
            </ul>

            <div className={styles.view_all__container}>
                <ViewAllButton link="/menu" />
            </div>

            <SeparatorLine />
        </section>
    );
};
