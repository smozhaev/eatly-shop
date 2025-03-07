import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

interface ILayout {
    children: ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div className={styles.app_layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};
