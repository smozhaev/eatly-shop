import { Blog } from '@pages/Blog';
import { Contact } from '@pages/Contact';
import { Home } from '@pages/Home';
import { Menu } from '@pages/Menu';
import { Pricing } from '@pages/Pricing';
import { Profile } from '@pages/Profile';
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
