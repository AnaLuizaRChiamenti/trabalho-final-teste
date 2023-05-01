import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import usuarioType from '../../types/usuariosType';

const adapter = createEntityAdapter<usuarioType>({ selectId: user => user.email });

export const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: adapter.getInitialState(),
    reducers: {
        addUsuarios: adapter.addOne
    }
});

export default usuariosSlice.reducer;

export const { addUsuarios } = usuariosSlice.actions;
export const { selectById: SelecionarUsuarioEmail, selectAll: SelecionarTodosUsuarios } = adapter.getSelectors(
    (state: RootState) => state.usuarios
);
