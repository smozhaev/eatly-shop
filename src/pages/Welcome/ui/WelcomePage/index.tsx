import {
    PageContainer,
    HeadingText,
    CustomText,
    LogoLink,
    TextCard,
} from '@shared/ui';
import styles from './styles.module.scss';
import { RoutingAndStoreDemo } from '@widgets/RoutingAndStoreDemo';
import { ITechnology, useTechData } from '@entities/Technologies';

export const WelcomePage = () => {
    const technologies: ITechnology[] = useTechData('main');

    return (
        <PageContainer className={styles.welcome_page}>
            <div className={styles.logo_container}>
                {technologies.map((technology: ITechnology) => {
                    return (
                        <LogoLink
                            key={technology.name}
                            link={technology.linkDoc}
                            logoSrc={technology.logo}
                            logoStyle={styles.app_logo}
                        />
                    );
                })}
            </div>
            <HeadingText>Template of FSD React App</HeadingText>
            <TextCard style={styles.aboutText}>
                <CustomText>
                    This is a react application template using Feature-Sliced
                    Design architecture, there is already connected routing and
                    a state manager:
                </CustomText>
            </TextCard>
            <RoutingAndStoreDemo />
            <CustomText style={styles.readTheDocs}>
                Go to the documentation by clicking on the icons
            </CustomText>
        </PageContainer>
    );
};
