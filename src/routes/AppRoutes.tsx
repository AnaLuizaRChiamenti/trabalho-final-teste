import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayoutHome from '../config/layout/DefaultLayoutHome';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayoutHome component={Home} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
