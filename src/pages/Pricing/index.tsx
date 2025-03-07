import { useLocation } from 'react-router';

export const Pricing = () => {
    const location = useLocation();
    return <p>{location.pathname}</p>;
};
