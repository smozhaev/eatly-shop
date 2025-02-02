import { ICustomUL } from './types';
import styles from './styles.module.scss';

export const CustomUL: React.FC<ICustomUL> = ({
    children,
    style,
    variant = 'row',
}) => {
    return (
        <ul
            className={`${styles.custom_ul} ${styles[`custom_ul__${variant}`]} ${style}`}
        >
            {children}
        </ul>
    );
};
