import { ILogoLink } from './types';
import styles from './styles.module.scss';

export const LogoLink: React.FC<ILogoLink> = ({ link, logoSrc, logoStyle }) => {
    return (
        <a href={link} target="_blank">
            <img
                src={logoSrc}
                className={`${styles.logo} ${logoStyle} `}
                alt="icon width link"
            />
        </a>
    );
};
