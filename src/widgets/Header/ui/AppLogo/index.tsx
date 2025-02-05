import styles from './styles.module.scss';
import { Link } from 'react-router';
import fullLogo from '@shared/assets/full-logo.svg';

export const AppLogo = () => {
    return (
        <Link to="/" className={styles.logo_container}>
            <img src={fullLogo} className={styles.logo} alt="icon width link" />
        </Link>
    );
};
