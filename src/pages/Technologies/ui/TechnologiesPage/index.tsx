import { PageContainer, HeadingText, CustomText, TextCard } from '@shared/ui';
import { RoutingAndStoreDemo } from '@widgets/RoutingAndStoreDemo';
import styles from './styles.module.scss';
import { UsedTechnologies } from '@features/UsedTechnologies';

export const TechnologiesPage = () => {
    return (
        <PageContainer>
            <HeadingText>Technologies page</HeadingText>
            <RoutingAndStoreDemo />

            <TextCard>
                <CustomText>
                    The following technologies are also used in this template:
                </CustomText>
                <UsedTechnologies />
                <CustomText style={styles.readTheDocs}>
                    Go to the documentation by clicking on the icons
                </CustomText>
            </TextCard>
        </PageContainer>
    );
};
