import { useLocation } from 'react-router';

export const Contact = () => {
    const location = useLocation();
    return <p>{location.pathname}</p>;
};
