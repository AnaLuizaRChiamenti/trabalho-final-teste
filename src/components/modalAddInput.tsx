import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import RecadoType from '../types/recadosType';
import { addRecado } from '../store/modules/recadosSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addNewTask, deleteTask } from '../store/modules/usuarioLogadoSlice';
import { updateUser } from '../store/modules/usuariosSlice';
import usuarioType from '../types/usuariosType';

interface ModalInputsProps {
    openModal: boolean;
    actionConfirm: () => void;
    actionCancel: () => void;
}

const ModalInputs: React.FC<ModalInputsProps> = ({ openModal, actionCancel, actionConfirm }) => {
    const [recado, setRecado] = React.useState({} as RecadoType);
    const usuarioLogado = useAppSelector(state => state.usuarioLogado.usuario);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateUser({ id: usuarioLogado.email, changes: usuarioLogado }));
    }, [usuarioLogado]);

    const handleClose = () => {
        actionCancel();
    };

    const handleChange = (ev: { target: { name: string; value: string } }) => {
        setRecado(state => ({ ...state, [ev.target.name]: ev.target.value }));
    };

    const handleConfirm = () => {
        dispatch(
            addNewTask({
                ...recado,
                id: `${Date.now()}`
            })
        );
        actionConfirm();
    };

    const handleDelete = (item: RecadoType) => {
        dispatch(deleteTask(item.id));
    };
    return (
        <Box>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>{recado.recado}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{recado.descricao}</DialogContentText>
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
                        value={recado.recado}
                        autoFocus
                        margin="dense"
                        id="recado"
                        name="recado"
                        label="Titulo do recado"
                        type={'text'}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={recado.descricao}
                        autoFocus
                        margin="dense"
                        id="descricao"
                        name="descricao"
                        label="Descrição do recado"
                        type={'text'}
                        onChange={handleChange}
                        fullWidth
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
            </Dialog>
        </Box>
    );
};

export default ModalInputs;
