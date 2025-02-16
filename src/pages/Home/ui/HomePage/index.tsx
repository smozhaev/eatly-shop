import { PageContainer } from '@shared/ui';
// import styles from './styles.module.scss';
import { HeroSection } from '../HeroSection';
import { Stats } from '../Stats';
import { AboutMobile } from '../AboutMobile';
import { TopRestaurant } from '../TopRestaurants';
import { TopDishes } from '../TopDishes';

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
