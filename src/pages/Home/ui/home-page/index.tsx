import { PageContainer } from '@shared/ui';
// import styles from './styles.module.scss';
import { HeroSection } from '../hero-section';
import { Stats } from '../stats';
import { AboutMobile } from '../about-mobile';
import { TopRestaurant } from '../top-restaurants';
import { TopDishes } from '@widgets/top-dishes';

export const Home = () => {
    return (
        <PageContainer>
            <HeroSection />
            <Stats />
            <AboutMobile />
            <TopRestaurant />
            <TopDishes />
        </PageContainer>
    );
};
