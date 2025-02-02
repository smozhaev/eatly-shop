import viteLogo from '@shared/assets/vite.svg';
import reduxLogo from '@shared/assets/redux.svg';
import typescriptLogo from '@shared/assets/typescript.svg';
import scssLogo from '@shared/assets/scss.svg';
import reactRouterLogo from '@shared/assets/rr_logo_dark.svg';
import dockerLogo from '@shared/assets/docker.svg';
import fsdLogo from '@shared/assets/logo-fsd.png';
import reactLogo from '@shared/assets/react.svg';
import { ITechnology } from './types';

export const technologiesData: ITechnology[] = [
    {
        name: 'React',
        logo: reactLogo,
        linkDoc: 'https://reactrouter.com/en/main',
    },
    {
        name: 'Feature-Sliced Design',
        logo: fsdLogo,
        linkDoc: 'https://feature-sliced.design/',
    },
    {
        name: 'Vite',
        logo: viteLogo,
        linkDoc: 'https://vite.dev/',
    },
    {
        name: 'Redux',
        logo: reduxLogo,
        linkDoc: 'https://redux.js.org/',
    },
    {
        name: 'TypeScript',
        logo: typescriptLogo,
        linkDoc: 'https://www.typescriptlang.org/docs/',
    },
    {
        name: 'Scss',
        logo: scssLogo,
        linkDoc: 'https://sass-lang.com/documentation/',
    },
    {
        name: 'React Router',
        logo: reactRouterLogo,
        linkDoc: 'https://reactrouter.com/',
    },
    {
        name: 'Docker',
        logo: dockerLogo,
        linkDoc: 'https://docs.docker.com/',
    },
];
