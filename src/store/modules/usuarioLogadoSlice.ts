import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import usuarioType from '../../types/usuariosType';

interface UsuarioState {
    usuario: usuarioType;
}
const initialState: UsuarioState = {
    usuario: { email: '', senha: '', repetirSenha: '', recados: [] }
};
export const usuarioLogadoSlice = createSlice({
    name: 'lembrarUsuario',
    initialState,
    reducers: {
        setUsuarioLogado: (state, action: PayloadAction<usuarioType>) => {
            state.usuario.email = action.payload.email;
            state.usuario.senha = action.payload.senha;
            state.usuario.repetirSenha = action.payload.repetirSenha;
            state.usuario.recados.push(...action.payload.recados);
        }
    }
});

export default usuarioLogadoSlice.reducer;

export const { setUsuarioLogado } = usuarioLogadoSlice.actions;
