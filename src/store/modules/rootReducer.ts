import { combineReducers } from '@reduxjs/toolkit';

import usuariosSlice from './usuariosSlice';
import usuarioLogadoSlice from './usuarioLogadoSlice';

export default combineReducers({
    usuarios: usuariosSlice,
    usuarioLogado: usuarioLogadoSlice
});
