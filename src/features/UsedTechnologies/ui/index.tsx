import { CustomUL } from '@shared/ui';
import {
    ITechnologyCard,
    TechnologyCard,
    useTechData,
} from '@entities/Technologies';
import styles from './styles.module.scss';

export const UsedTechnologies = () => {
    const technologies = useTechData('remaining');

    return (
        <CustomUL variant={'row'}>
            {technologies.map((technology: ITechnologyCard) => {
                return (
                    <TechnologyCard
                        key={technology.name}
                        logo={technology.logo}
                        name={technology.name}
                        linkDoc={technology.linkDoc}
                        liStyle={styles.card}
                    />
                );
            })}
        </CustomUL>
    );
};
