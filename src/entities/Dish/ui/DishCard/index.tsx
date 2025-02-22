import starPurple from '@shared/assets/svg/star-p.svg';
import styles from './styles.module.scss';
import { IDishCard } from '../../model/types';

export const DishCard: React.FC<IDishCard> = ({
    topFeature,
    bottomFeature,
    categoryStyle,
    data,
}) => {
    return (
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
                <span
                    className={styles.dish_card__category}
                    style={{
                        color: categoryStyle?.color,
                        backgroundColor: categoryStyle?.backgroundColor,
                    }}
                >
                    {data.category}
                </span>
                <p className={styles.dish_card__name}>{data.name}</p>
                <div className={styles.dish_card__info}>
                    <p className={styles.dish_card__time}>{data.time} min</p>
                    <div className={styles.dish_card__rating}>
                        <img src={starPurple} alt="" />
                        <p>{data.rating}</p>
                    </div>
                </div>
                {bottomFeature}
            </div>
        </div>
    );
};
