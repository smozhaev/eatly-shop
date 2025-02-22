import styles from './styles.module.scss';
import { ICategoryElement } from './types';

export const CategoryElement: React.FC<ICategoryElement> = ({
    category,
    categoryStyle,
}) => {
    return (
        <span
            className={styles.category_element}
            style={{
                color: categoryStyle?.color,
                backgroundColor: categoryStyle?.backgroundColor,
            }}
        >
            {category}
        </span>
    );
};
