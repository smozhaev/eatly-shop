import { DishCard } from '@entities/Dish';

import { LikeProduct } from '@features/like-product';
import { PriceWithAddToCart } from '@features/price-with-add-to-cart';
import { TopListSection } from '@shared/ui';
import { useTopDishes } from '../model/useTopDishes';
import { useProcessedTopDishes } from '../model/useProcessedTopDishes';

export const TopDishes = () => {
    const { dishes, loading } = useTopDishes();
    const processedDishes = useProcessedTopDishes(dishes);
    return (
        <TopListSection
            title={'Dishes'}
            loading={loading}
            data={processedDishes}
            viewAllLink={'/menu'}
        >
            {(processedDishes) =>
                processedDishes.map(
                    ({ id, price, color, backgroundColor, ...dish }) => {
                        return (
                            <li key={id}>
                                <DishCard
                                    topFeature={<LikeProduct />}
                                    bottomFeature={
                                        <PriceWithAddToCart
                                            price={price}
                                            addFunc={() => {}}
                                            removeFunc={() => {}}
                                        />
                                    }
                                    categoryStyle={{
                                        color,
                                        backgroundColor,
                                    }}
                                    data={dish}
                                />
                            </li>
                        );
                    }
                )
            }
        </TopListSection>
    );
};
