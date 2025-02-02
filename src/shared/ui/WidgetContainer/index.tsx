import { IWidgetContainer } from './types';
import styles from './styles.module.scss';

export const WidgetContainer: React.FC<IWidgetContainer> = ({
    children,
    style,
}) => {
    return (
        <div className={`${styles.widget_container} ${style}`}>{children}</div>
    );
};
