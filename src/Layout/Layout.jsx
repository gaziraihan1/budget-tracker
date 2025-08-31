import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
             <footer>

             </footer>
        </div>
    );
};

export default Layout;