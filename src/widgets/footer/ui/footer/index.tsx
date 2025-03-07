import { SeparatorLine } from '@shared/ui/elements/separator-line';

import styles from './styles.module.scss';
import { Navigation } from '../navigation';
import { AppLogo } from '../app-logo/index';
import InstagramIcon from '@shared/assets/svg/footer-icons/Path 6.svg';
import LinkedInIcon from '@shared/assets/svg/footer-icons/Path 7.svg';
import FacebookIcon from '@shared/assets/svg/footer-icons/Path 9.svg';
import TwitterIcon from '@shared/assets/svg/footer-icons/Path 13.svg';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__body}>
                    <AppLogo />
                    <Navigation />
                </div>
                <SeparatorLine />
                <div className={styles.copyright_section}>
                    <p className={styles.copyright_section__text}>
                        © 2023 EATLY All Rights Reserved.
                    </p>

                    <nav className={styles.copyright_section__nav}>
                        <a
                            href="#"
                            className={styles.copyright_section__social}
                        >
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                        <a
                            href="#"
                            className={styles.copyright_section__social}
                        >
                            <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                        <a
                            href="#"
                            className={styles.copyright_section__social}
                        >
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                        <a
                            href="#"
                            className={styles.copyright_section__social}
                        >
                            <img src={TwitterIcon} alt="Twitter" />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};
