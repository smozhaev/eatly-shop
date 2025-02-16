import styles from './styles.module.scss';

export const Stats = () => {
    const stats = [
        {
            num: '10K+',
            desc: 'Satisfied Costumers All Great Over The World',
        },
        {
            num: '4M',
            desc: 'Healthy Dishes Sold Including Milk Shakes Smooth',
        },
        {
            num: '99.99%',
            desc: 'Reliable Customer Support We Provide Great Experiences',
        },
    ];
    return (
        <div className={styles.stats}>
            <ul className={styles.stats__list}>
                {stats.map((stat) => (
                    <li key={stat.num} className={styles.stats__item}>
                        <div className={styles.stats__item__num}>
                            {stat.num}
                        </div>
                        <p className={styles.stats__item__desc}>{stat.desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
