import { BrowserRouter } from 'react-router';
import { IWithProviderProps } from './types';

export const WithRouter: React.FC<IWithProviderProps> = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};
