import { TechnologiesPage } from '@pages/Technologies';
import { WelcomePage } from '@pages/Welcome';
import { Route, Routes } from 'react-router';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="" element={<WelcomePage />} />
            <Route path="technologies" element={<TechnologiesPage />} />
        </Routes>
    );
};
