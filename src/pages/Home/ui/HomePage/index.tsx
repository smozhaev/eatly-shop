import { PageContainer, HeadingText, CustomText, TextCard } from '@shared/ui';
import styles from './styles.module.scss';
import { UsedTechnologies } from '@features/UsedTechnologies';

export const HomePage = () => {
    return (
        <PageContainer>
            <HeadingText>Start of Eatly-Shop project</HeadingText>
            
            <TextCard>
                <CustomText style={styles.techText}>
                Eatly is a food delivery service
                </CustomText>
                <CustomText >
                    The following technologies are also used in this project:
                </CustomText>
                <UsedTechnologies />
                <CustomText style={styles.readTheDocs}>
                    Go to the documentation by clicking on the icons
                </CustomText>
            </TextCard>
        </PageContainer>
    );
};
