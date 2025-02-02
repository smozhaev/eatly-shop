import styles from './styles.module.scss';
import { IHeadingText } from './types';

export const HeadingText: React.FC<IHeadingText> = ({ children }) => {
    return <h1 className={styles.headingText}>{children}</h1>;
};
