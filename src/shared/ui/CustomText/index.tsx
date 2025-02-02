import styles from './styles.module.scss';
import { ICustomText } from './types';

export const CustomText: React.FC<ICustomText> = ({ children, style }) => {
    return <p className={`${styles.customText} ${style}`}>{children}</p>;
};
