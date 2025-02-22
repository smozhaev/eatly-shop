import styles from './styles.module.scss';
import { IRestaurantCard } from '../../model/types';
import { CardWrapper, CategoryElement, DeliveryAndRaiting } from '@shared/ui';

export const RestaurantCard: React.FC<IRestaurantCard> = ({
    bottomFeature,
    categoryStyle,
    data,
}) => {
    return (
        <CardWrapper>
            <div className={styles.restaurant_card__image_container}>
                <img
                    className={styles.restaurant_card__image}
                    src={data.image}
                    alt=""
                />
            </div>
            <div className={styles.restaurant_card__container}>
                <CategoryElement
                    category={data.category}
                    categoryStyle={categoryStyle}
                />
                <DeliveryAndRaiting time={data.time} rating={data.rating} />
                <p className={styles.restaurant_card__name}>{data.name}</p>

                {bottomFeature}
            </div>
        </CardWrapper>
    );
};
