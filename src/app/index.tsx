import { Layout } from '@app/layout';
import { Providers } from './providers';
import { AppRouter } from './router';

function App() {
    return (
        <Providers>
            <Layout>
                <AppRouter />
            </Layout>
        </Providers>
    );
}

export default App;
