import { LogoLink } from '@shared/ui';
import styles from './styles.module.scss';
import { ITechnologyCard } from './types';

export const TechnologyCard: React.FC<ITechnologyCard> = ({
    logo,
    name,
    linkDoc,
    liStyle,
    logoStyle,
    textStyle,
}) => {
    return (
        <li className={liStyle}>
            <LogoLink link={linkDoc} logoSrc={logo} logoStyle={logoStyle} />
            <p className={`${styles.text} ${textStyle} `}>{name}</p>
        </li>
    );
};
