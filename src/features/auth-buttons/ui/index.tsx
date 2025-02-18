import { ReusableButton, CustomIcon } from '@shared/ui';
import styles from './styles.module.scss';
import userIcon from '@shared/assets/svg/user-l.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const AuthButtons = () => {
    const [authState, setAuthState] = useState(false);
    const navigate = useNavigate();
    const logout = () => {
        setAuthState(false);
        navigate('/');
    };

    return (
        <div className={styles.auth_buttons__container}>
            {authState ? (
                <>
                    <ReusableButton
                        buttonStyle={styles.button_login}
                        onClickFunction={() => logout()}
                    >
                        logout{' '}
                    </ReusableButton>
                    <ReusableButton
                        onClickFunction={() => navigate('/profile')}
                        buttonStyle={styles.button_profile}
                    >
                        <CustomIcon
                            iconSrc={userIcon} // надо будет реализовать перекрашивание иконки профиля
                            iconCustomStyle={styles.button_profile__icon}
                        />
                    </ReusableButton>
                </>
            ) : (
                <>
                    <ReusableButton
                        buttonStyle={styles.button_login}
                        onClickFunction={() => setAuthState(true)}
                    >
                        Login{' '}
                    </ReusableButton>
                    <ReusableButton
                        buttonStyle={styles.button_signup}
                        onClickFunction={() => setAuthState(true)}
                    >
                        Sing up
                    </ReusableButton>
                </>
            )}
        </div>
    );
};
