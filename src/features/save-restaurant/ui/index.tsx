import { BookMarkSvg } from '@shared/ui/icon-components/BookMarkSvg';
import styles from './styles.module.scss';
import { useState } from 'react';

export const SaveRestaurant = () => {
    const [saved, setSaved] = useState(false);
    return (
        <button
            className={`${styles.save_restaurant}`}
            onClick={() => {
                setSaved(!saved);
            }}
        >
            <span>
                <BookMarkSvg saveState={saved} />
            </span>
        </button>
    );
};
