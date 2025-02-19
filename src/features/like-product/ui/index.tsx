import { useState } from 'react';
import styles from './styles.module.scss';
import { HeartSvg } from '@shared/ui/svg-components/HeartSvg';

export const LikeProduct = () => {
    const [like, setLike] = useState(false);

    return (
        <button onClick={() => setLike(!like)} className={styles.heart}>
            <HeartSvg red={like} />
        </button>
    );
};
