import { RestaurantCard } from '@entities/Restaurant';
import { TopListSection } from '@shared/ui';
import { useTopRestaurants } from '../model/useTopRestaurants';
import { useProcessedTopRestaurants } from '../model/useProcessedTopRestaurants';

export const TopRestaurants = () => {
    const { restaurants, loading } = useTopRestaurants();
    const processedRestaurants = useProcessedTopRestaurants(restaurants);
    return (
        <TopListSection
            title={'Restaurants'}
            loading={loading}
            data={processedRestaurants}
            viewAllLink={'/menu'}
        >
            {(processedRestaurants) =>
                processedRestaurants.map(
                    ({ id, color, backgroundColor, ...restaurant }) => {
                        return (
                            <li key={id}>
                                <RestaurantCard
                                    bottomFeature={<button>save</button>}
                                    categoryStyle={{
                                        color,
                                        backgroundColor,
                                    }}
                                    data={restaurant}
                                />
                            </li>
                        );
                    }
                )
            }
        </TopListSection>
    );
};
