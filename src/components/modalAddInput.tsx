import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updateUser } from '../store/modules/UsersSlice';
import { addNewTask } from '../store/modules/UserLoggedSlice';
import taskType from '../types/taskType';
import { Alert } from '@mui/material';

interface ModalInputsProps {
    openModal: boolean;
    actionConfirm: () => void;
    actionCancel: () => void;
}

const ModalInputs: React.FC<ModalInputsProps> = ({ openModal, actionCancel, actionConfirm }) => {
    const dispatch = useAppDispatch();
    const [task, setTask] = useState({} as taskType);
    const [alert, setAlert] = useState(false);
    const userLogged = useAppSelector(state => state.user.userLogged);

    useEffect(() => {
        dispatch(updateUser({ id: userLogged.email, changes: userLogged }));
    }, [userLogged]);

    const handleClose = () => {
        actionCancel();
    };

    const handleChange = (ev: { target: { name: string; value: string } }) => {
        setTask(state => ({ ...state, [ev.target.name]: ev.target.value }));
    };

    const handleConfirm = () => {
        if (!task.title) {
            setAlert(true);
            return;
        }

        dispatch(
            addNewTask({
                ...task,
                id: Date.now()
            })
        );
        setTask({
            id: 0,
            title: '',
            description: ''
        });
        actionConfirm();
    };

    return (
        <Box>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>Adicionar</DialogTitle>
                <DialogContent>
                    <DialogContentText>{'Adicione seu recado:'}</DialogContentText>
                    <TextField
                        sx={{
                            '& label.Mui-focused': {
                                color: '#222'
                            },
                            ' & .MuiInputBase-input': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#222'
                                }
                            }
                        }}
                        autoFocus
                        margin="dense"
                        id="titleTask"
                        label="Titulo do recado"
                        type={'text'}
                        fullWidth
                        name="title"
                        onChange={handleChange}
                        value={task.title}
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="descriptionTask"
                        label="Descrição do recado"
                        type={'text'}
                        fullWidth
                        name="description"
                        onChange={handleChange}
                        value={task.description}
                        variant="standard"
                        sx={{ hover: 'false' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: '#222' }}>
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirm} sx={{ color: '#222' }}>
                        Confirmar
                    </Button>
                </DialogActions>
                {alert && (
                    <Alert severity="warning" sx={{ mt: 2 }} onClose={() => setAlert(false)}>
                        Por favor, escreva um recado!
                    </Alert>
                )}
            </Dialog>
        </Box>
    );
};

export default ModalInputs;
