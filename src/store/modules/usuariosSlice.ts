import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import usuarioType from '../../types/usuariosType';

const adapter = createEntityAdapter<usuarioType>({
    selectId: item => item.email
});

const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: adapter.getInitialState(),
    reducers: {
        addUser: adapter.addOne
    }
});

export const { addUser } = usuariosSlice.actions;
export const { selectAll: selectAllUsers } = adapter.getSelectors((state: RootState) => state.usuarios);
export default usuariosSlice.reducer;
