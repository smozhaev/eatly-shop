import styles from './styles.module.scss';
import starPurple from '@shared/assets/svg/star-p.svg';
import { IDeliveryAndRaiting } from './types';

export const DeliveryAndRaiting: React.FC<IDeliveryAndRaiting> = ({
    time,
    rating,
}) => {
    return (
        <div className={styles.delivery_and_raiting__info}>
            <p className={styles.delivery_and_raiting__time}>{time} min</p>
            <div className={styles.delivery_and_raiting__rating}>
                <img src={starPurple} alt="" />
                <p>{rating}</p>
            </div>
        </div>
    );
};
