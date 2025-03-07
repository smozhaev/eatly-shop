import { useLocation } from 'react-router';

export const Blog = () => {
    const location = useLocation();
    return <p>{location.pathname}</p>;
};
