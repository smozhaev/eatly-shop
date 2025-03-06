import { PageContainer } from '@shared/ui';
import { TopDishes } from '@widgets/top-dishes';
import { HeroSection } from '../hero-section';
import { Stats } from '../stats';
import { AboutMobile } from '../about-mobile';
import { TopRestaurants } from '@widgets/top-restaurants';
import { SneakPeekPurshsases } from '../sneak-peek-purshases';
import { Testimonials } from '../testimonials';

export const Home = () => {
    return (
        <PageContainer>
            <HeroSection />
            <Stats />
            <AboutMobile />
            <TopRestaurants />
            <TopDishes />
            <SneakPeekPurshsases />
            <Testimonials />
        </PageContainer>
    );
};
