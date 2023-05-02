import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayoutHome from '../config/layout/DefaultLayoutHome';

import Cadastro from '../pages/Cadastro';
import Login from '../pages/login';
import Recados from '../pages/Recados';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayoutHome component={Home} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/recados" element={<Recados />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
