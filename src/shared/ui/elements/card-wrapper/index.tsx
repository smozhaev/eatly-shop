import styles from './styles.module.scss';
import { ICardWrapper } from './types';

export const CardWrapper: React.FC<ICardWrapper> = ({ children, width }) => {
    return (
        <div className={styles.card_wrapper} style={{ width: width }}>
            {children}
        </div>
    );
};
