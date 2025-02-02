import { IWithProviderProps } from './types';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';

export const WithStore: React.FC<IWithProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
