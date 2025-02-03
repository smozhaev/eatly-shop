import { HomePage } from '@pages/Home';
import { Route, Routes } from 'react-router';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};
