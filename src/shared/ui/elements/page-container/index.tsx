import styles from './styles.module.scss';
import { IPageContainer } from './types';

export const PageContainer: React.FC<IPageContainer> = ({
    children,
    className,
}) => {
    const style = className;
    return (
        <div className={`${styles.page_container} ${style}`}>{children}</div>
    );
};
