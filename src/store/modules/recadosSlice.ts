import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import RecadoType from '../../types/recadosType';

const adapter = createEntityAdapter<RecadoType>({ selectId: recado => recado.id });

export const RecadosSlice = createSlice({
    name: 'recados',
    initialState: adapter.getInitialState(),
    reducers: {
        addRecado: adapter.addOne,
        removeRecado: adapter.removeOne,
        editRecado: adapter.setOne
    }
});

export default RecadosSlice.reducer;

export const { addRecado, removeRecado, editRecado } = RecadosSlice.actions;
export const { selectById: SelectRecadosById, selectAll: SelectAllRecados } = adapter.getSelectors(
    (state: RootState) => state.recados
);
