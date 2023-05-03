import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import usuarioType from '../../types/usuariosType';
import RecadoType from '../../types/recadosType';

interface UsuarioState {
    usuario: usuarioType;
}
const initialState: UsuarioState = {
    usuario: { email: '', senha: '', recados: [] }
};
export const usuarioLogadoSlice = createSlice({
    name: 'usuarioLogado',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<usuarioType>) => {
            return { usuario: action.payload };
        },

        logout: () => {
            return initialState;
        },
        addNewTask: (state, action: PayloadAction<RecadoType>) => {
            state.usuario.recados.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<RecadoType>) => {
            const task = action.payload;
            const index = state.usuario.recados.findIndex(item => item.id === task.id);

            state.usuario.recados[index] = task;
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const index = state.usuario.recados.findIndex(item => item.id === id);

            state.usuario.recados.splice(index, 1);
        }
    }
});

export default usuarioLogadoSlice.reducer;

export const { setUser, logout, addNewTask, updateTask, deleteTask } = usuarioLogadoSlice.actions;
