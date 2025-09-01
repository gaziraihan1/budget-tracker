import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='min-h-screen'>
                <Outlet />
            </main>
             <footer className='mt-12 lg:mt-18 2xl:mt-24'>
                <Footer />
             </footer>
        </div>
    );
};

export default Layout;