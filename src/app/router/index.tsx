import { Blog } from '@pages/blog';
import { Contact } from '@pages/contact';
import { Home } from '@pages/home';
import { Menu } from '@pages/menu';
import { Pricing } from '@pages/pricing';
import { Profile } from '@pages/profile';
import { Route, Routes } from 'react-router';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};
