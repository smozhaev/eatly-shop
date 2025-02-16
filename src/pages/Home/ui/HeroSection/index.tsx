import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { ReusableButton } from '@shared/ui';
import trustpilot from '@shared/assets/svg/trustpilot.svg';
import star from '@shared/assets/svg/star-y.svg';
import heroFoodImage from '@shared/assets/png/food-image-hero.png';

export const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__about}>
                    <div className={styles.hero__baner_users_info}>
                        <span
                            className={styles.hero__baner_users_info__line}
                        ></span>
                        <p className={styles.hero__baner_users_info__text}>
                            OVER 1000 USERS
                        </p>
                    </div>

                    <h1 className={styles.hero__title}>
                        Enjoy Foods All Over The{' '}
                        <span className={styles.hero__title__span}>World</span>
                    </h1>

                    <p className={styles.hero__description}>
                        EatLy help you set saving goals, earn cash back offers,
                        Go to disclaimer for more details and get paychecks up
                        to two days early. Get a{' '}
                        <span className={styles.hero__description__span}>
                            $20 bonus.
                        </span>
                    </p>

                    <div className={styles.hero__buttons__container}>
                        <ReusableButton
                            onClickFunction={() => {}}
                            buttonStyle={styles.hero__button__start}
                        >
                            Get Started
                        </ReusableButton>
                        <ReusableButton
                            onClickFunction={() => navigate('/pricing')}
                            buttonStyle={styles.hero__button__pro}
                        >
                            Go Pro
                        </ReusableButton>
                    </div>

                    <div className={styles.hero__app_rating}>
                        <img src={trustpilot} alt="Trustpilot" />
                        <div className={styles.hero__app_rating__stars}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <img key={index} src={star} alt="Star" />
                            ))}
                        </div>
                        <p
                            className={
                                styles.hero__app_rating__number_of_reviews
                            }
                        >
                            4900+
                        </p>
                    </div>
                </div>

                <div className={styles.hero__decor}>
                    <img src={heroFoodImage} alt="Hero image" />
                </div>
            </div>
        </section>
    );
};
