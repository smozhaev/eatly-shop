import { ReusableButton } from '@shared/ui';
import styles from './styles.module.scss';
import mobileScreen from '@shared/assets/png/mobile-screen.png';
import { SeparatorLine } from '@shared/ui/separator-line';
import { ArrowSvg } from '@shared/ui/svg-components/ArrowSvg';

export const AboutMobile = () => {
    return (
        <section className={styles.mobile}>
            <div className={styles.mobile__container}>
                <div className={styles.mobile__image__container}>
                    <img
                        className={styles.mobile__image}
                        src={mobileScreen}
                    ></img>
                </div>
                <div className={styles.mobile__info}>
                    <h2 className={styles.mobile__title}>
                        Premium{' '}
                        <span className={styles.mobile__title__span}>
                            Quality
                        </span>
                        <br />
                        For Your Health
                    </h2>
                    <ul className={styles.mobile__list}>
                        <li className={styles.mobile__item}>
                            <p className={styles.mobile__item__text}>
                                Premium quality food is made with ingredients
                                that are packed with essential vitamins,
                                minerals.
                            </p>
                        </li>
                        <li className={styles.mobile__item}>
                            <p className={styles.mobile__item__text}>
                                These foods promote overall wellness by support
                                healthy digestion and boosting immunity
                            </p>
                        </li>
                    </ul>
                    <ReusableButton
                        onClickFunction={() => {}}
                        buttonStyle={styles.mobile__download}
                        secondChildren={<ArrowSvg />}
                    >
                        Download
                    </ReusableButton>
                </div>
            </div>
            <SeparatorLine />
        </section>
    );
};
