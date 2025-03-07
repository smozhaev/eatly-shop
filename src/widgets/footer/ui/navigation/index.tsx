import { Link, useLocation } from 'react-router';
import styles from './styles.module.scss';

const navs = [
    {
        name: 'Menu',
        link: '/menu',
    },
    {
        name: 'Blog',
        link: '/blog',
    },
    {
        name: 'Pricing',
        link: '/pricing',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
];

export const Navigation = () => {
    const location = useLocation();

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
                {navs.map((nav) => {
                    const isActive = location.pathname === nav.link;
                    return (
                        <li key={nav.name}>
                            <Link
                                to={nav.link}
                                className={`
                                    ${styles.navigation__link}
                                    ${
                                        isActive
                                            ? styles.navigation__link_active
                                            : ''
                                    }
                                `}
                            >
                                {nav.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
