import { combineReducers } from '@reduxjs/toolkit';
import usuariosSlice from './usuariosSlice';
import usuarioLogadoSlice from './usuarioLogadoSlice';
import recadosSlice from './recadosSlice';

export default combineReducers({
    usuarios: usuariosSlice,
    usuarioLogado: usuarioLogadoSlice,
    recados: recadosSlice
});
