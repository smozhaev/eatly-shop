import styles from './styles.module.scss';
import { IAddButton } from './types';

export const AddButton: React.FC<IAddButton> = ({
    children,
    onClick,
    buttonStyle,
}) => {
    const propsFunc = onClick;
    return (
        <button
            onClick={propsFunc}
            className={`${styles.add_button} ${buttonStyle}`}
        >
            {children}
        </button>
    );
};
