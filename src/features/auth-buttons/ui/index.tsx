import { ReusableButton } from '@shared/ui';
import styles from './styles.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ProfileSVG } from '@shared/ui/svg-components/ProfileSVG';

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
                        <ProfileSVG style={styles.profile__icon} />
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
