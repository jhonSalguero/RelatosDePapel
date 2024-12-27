import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import NotFound from '../views/NotFound';
import { Overview } from "../views/Overview";
import { Header } from "../components/Header";
import BookDetail from '../views/BookDetail';  // Importa el componente de detalles del libro

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/restaurants" element={<Layout><Overview /></Layout>} />
                <Route path="/book/:id" element={<Layout><BookDetail /></Layout>} /> {/* Ruta para detalles del libro */}
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;
