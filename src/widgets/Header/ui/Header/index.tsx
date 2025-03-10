import { SeparatorLine } from '@shared/ui/elements/separator-line';
import { AuthButtons } from '@features/auth-buttons';
import styles from './styles.module.scss';
import { Navigation } from '../navigation';
import { AppLogo } from '../app-logo/index';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__body}>
                    <AppLogo />
                    <Navigation />
                    <AuthButtons />
                </div>
                <SeparatorLine />
            </div>
        </header>
    );
};
