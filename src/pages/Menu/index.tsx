import { useLocation } from 'react-router';

export const Menu = () => {
    const location = useLocation();
    return <p>{location.pathname}</p>;
};
