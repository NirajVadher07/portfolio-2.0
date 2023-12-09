import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    return (
        <div className='bg-white min-h-screen text-primary'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
            <Head>
                <link rel="shortcut icon" href="/logo-white.svg" />
                <title>
                    Niraj Vadher
                </title>
            </Head>        
            {/* header */}
            <Header />
            <div>{children}</div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Layout;
