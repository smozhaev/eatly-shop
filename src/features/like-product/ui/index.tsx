import { useState } from 'react';
import styles from './styles.module.scss';
import { HeartSvg } from '@shared/assets/svg/HeartSvg';

export const LikeProduct = () => {
    const [liked, setLiked] = useState(false);

    return (
        <button onClick={() => setLiked(!liked)} className={styles.heart}>
            <HeartSvg red={liked} />
        </button>
    );
};
