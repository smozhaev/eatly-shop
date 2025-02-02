import styles from './styles.module.scss';
import { ITextCard } from './types';

export const TextCard: React.FC<ITextCard> = ({ children, style }) => {
    return <div className={`${styles.card_text} ${style}`}>{children}</div>;
};
