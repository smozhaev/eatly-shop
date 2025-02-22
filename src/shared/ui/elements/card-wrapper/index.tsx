import styles from './styles.module.scss';
import { ICardWrapper } from './types';

export const CardWrapper: React.FC<ICardWrapper> = ({ children }) => {
    return <div className={styles.card_wrapper}>{children}</div>;
};
