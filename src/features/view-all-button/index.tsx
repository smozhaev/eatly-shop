import { ArrowSvg, ReusableButton } from '@shared/ui';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router';

export const ViewAllButton: React.FC<{ link: string }> = ({ link }) => {
    const navigate = useNavigate();
    return (
        <ReusableButton
            onClickFunction={() => navigate(link)}
            buttonStyle={styles.view_all_button}
            secondChildren={<ArrowSvg />}
        >
            View All
        </ReusableButton>
    );
};
