import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@app/styles/index.scss';
import App from '@app/index';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
