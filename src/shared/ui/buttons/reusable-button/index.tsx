import { ICustomButton } from './types';
import styles from './styles.module.scss';

export const ReusableButton: React.FC<ICustomButton> = ({
    children,
    secondChildren,
    onClickFunction,
    buttonStyle,
}) => {
    return (
        <button
            className={`${styles.button} ${buttonStyle}`}
            onClick={onClickFunction}
        >
            <p className={styles.button__text}>{children}</p>
            {secondChildren}
        </button>
    );
};
