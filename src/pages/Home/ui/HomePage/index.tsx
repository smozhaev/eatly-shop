import { PageContainer } from '@shared/ui';
import styles from './styles.module.scss';
import { HeroSection } from '../HeroSection';

export const Home = () => {
    return (
        <PageContainer>
            <HeroSection />
            <div className={styles.stats}></div>
            <section className={styles.mobile}></section>
        </PageContainer>
    );
};
