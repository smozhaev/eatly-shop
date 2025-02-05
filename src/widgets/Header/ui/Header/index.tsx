import { SeparatopLine } from '@shared/ui/SeparatorLine';
import { AuthButtons } from '@features/AuthButtons';
import styles from './styles.module.scss';
import { Navigation } from '../Navigation';
import { AppLogo } from '../AppLogo';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__body}>
                    <AppLogo />
                    <Navigation />
                    <AuthButtons />
                </div>
                <SeparatopLine />
            </div>
        </header>
    );
};
