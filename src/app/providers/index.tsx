import { IWithProviderProps } from './types';
import { WithRouter } from './with-router';
import { WithStore } from './with-store';

export const Providers: React.FC<IWithProviderProps> = ({ children }) => {
    return (
        <WithStore>
            <WithRouter>{children}</WithRouter>
        </WithStore>
    );
};
