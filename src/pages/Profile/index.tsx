import { useLocation } from 'react-router';

export const Profile = () => {
    const location = useLocation();
    return <p>{location.pathname}</p>;
};
