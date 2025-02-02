import { CustomButton, CustomText, WidgetContainer } from '@shared/ui';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '@entities/Click/model/clickSlice';
import { RootState } from '@app/store/store';
import styles from './styles.module.scss';

export const RoutingAndStoreDemo = () => {
    const count = useSelector((state: RootState) => state.click.value);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <WidgetContainer>
                <div className={styles.button_container}>
                    <div className={styles.routing_demo_container}>
                        <CustomText>Router demo:</CustomText>
                        {location.pathname === '/' ? (
                            <CustomButton
                                onClickFunction={() => {
                                    navigate('/technologies');
                                }}
                                children={'View technology stack'}
                            />
                        ) : (
                            <CustomButton
                                onClickFunction={() => {
                                    navigate('/');
                                }}
                                children={'Back Welcome Page'}
                            />
                        )}
                    </div>
                    <div className={styles.store_demo_container}>
                        <CustomText>Store demo:</CustomText>
                        <CustomButton
                            onClickFunction={() => {
                                dispatch(increment());
                            }}
                            children={`How many click ${count}`}
                        />
                    </div>
                </div>
            </WidgetContainer>
        </>
    );
};
