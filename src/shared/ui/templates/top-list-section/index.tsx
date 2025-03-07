import { ViewAllButton } from '@shared/ui/buttons/view-all-button';
import { SeparatorLine } from '../../elements/separator-line';
import styles from './styles.module.scss';
import { ITopListSectionProps } from './types';

export const TopListSection = <T,>({
    title,
    loading,
    children,
    data,
    viewAllLink,
}: ITopListSectionProps<T>) => {
    return (
        <section className={styles.top_list}>
            <h3 className={styles.top_list__title}>
                Our Top{' '}
                <span className={styles.top_list__title__span}>{title}</span>
            </h3>
            <ul className={styles.top_list__list}>
                {loading ? <div>Loading...</div> : children(data)}
            </ul>

            <div className={styles.view_all__container}>
                <ViewAllButton link={viewAllLink} />
            </div>

            <SeparatorLine />
        </section>
    );
};
