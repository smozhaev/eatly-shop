import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ILayout {
    children: ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
    return <div className={styles.app_layout}> {children} </div>;
};
