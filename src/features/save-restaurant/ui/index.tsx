import { BookMarkSvg } from '@shared/ui/icon-components/BookMarkSvg';
import { useToggle } from '@shared/lib/hooks';
import styles from './styles.module.scss';

export const SaveRestaurant: React.FC<{
    savedId: string;
    initialState: boolean;
}> = ({ savedId, initialState }) => {
    const [isFavorite, toggleFavorite] = useToggle(initialState);
    console.log(savedId);
    return (
        <button
            className={`${styles.save_restaurant} ${isFavorite ? styles.saved : ''}`}
            onClick={toggleFavorite}
        >
            <span>
                <BookMarkSvg saveState={isFavorite} />
            </span>
        </button>
    );
};
