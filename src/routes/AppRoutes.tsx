import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayoutHome from '../config/layout/DefaultLayoutHome';

import Cadastro from '../pages/Signup';
import Login from '../pages/Signin';
import Recados from '../pages/Notes';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayoutHome component={Home} />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Cadastro />} />
                <Route path="/notes" element={<Recados />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
