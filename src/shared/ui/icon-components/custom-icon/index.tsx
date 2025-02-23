import { ICustomIcon } from './types';
import styles from './styles.module.scss';

export const CustomIcon: React.FC<ICustomIcon> = ({
    iconSrc,
    iconCustomStyle,
}) => {
    return (
        <img
            src={iconSrc}
            className={`${styles.icon} ${iconCustomStyle} `}
            alt="icon"
        />
    );
};
