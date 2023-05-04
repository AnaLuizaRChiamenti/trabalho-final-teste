import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import taskType from '../../types/taskType';
import userType from '../../types/userType';

interface userloggedstate {
    userLogged: userType;
}
const initialState: userloggedstate = {
    userLogged: { email: '', password: '', tasks: [] }
};
export const UserLoggedSlice = createSlice({
    name: 'UserLogged',
    initialState,
    reducers: {
        setUserLogged: (state, action: PayloadAction<userType>) => {
            return { userLogged: action.payload };
        },

        logout: () => {
            return initialState;
        },
        addNewTask: (state, action: PayloadAction<taskType>) => {
            state.userLogged.tasks.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<taskType>) => {
            const task = action.payload;
            const index = state.userLogged.tasks.findIndex(item => item.id === task.id);

            state.userLogged.tasks[index] = task;
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const index = state.userLogged.tasks.findIndex(item => item.id === id);

            state.userLogged.tasks.splice(index, 1);
        }
    }
});

export default UserLoggedSlice.reducer;

export const { setUserLogged, logout, addNewTask, updateTask, deleteTask } = UserLoggedSlice.actions;
