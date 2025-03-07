import styles from './styles.module.scss';
import { IDishCard } from '../../model/types';
import { CardWrapper, CategoryElement, DeliveryAndRaiting } from '@shared/ui';

export const DishCard: React.FC<IDishCard> = ({
    topFeature,
    bottomFeature,
    categoryStyle,
    data,
}) => {
    return (
        <CardWrapper width="224.63px">
            <div className={styles.dish_card}>
                {topFeature}
                <div className={styles.dish_card__image_container}>
                    <img
                        className={styles.dish_card__image}
                        src={data.image}
                        alt=""
                    />
                </div>
                <div className={styles.dish_card__container}>
                    <CategoryElement
                        category={data.category}
                        categoryStyle={categoryStyle}
                    />
                    <p className={styles.dish_card__name}>{data.name}</p>
                    <DeliveryAndRaiting time={data.time} rating={data.rating} />
                    {bottomFeature}
                </div>
            </div>
        </CardWrapper>
    );
};
