import { ICustomButton } from './types';
import styles from './styles.module.scss';

export const CustomButton: React.FC<ICustomButton> = ({
    children,
    onClickFunction,
    buttonStyle,
}) => {
    return (
        <button
            className={`${styles.button_custom} ${buttonStyle}`}
            onClick={onClickFunction}
        >
            {children}
        </button>
    );
};
