import React, { useState } from 'react';
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
import { useAppDispatch } from '../store/hooks';

interface ModalInputsProps {
    recado: string;
    descricao: string;
    openModal: boolean;
    actionConfirm: () => void;
    actionCancel: () => void;
}

const ModalInputs: React.FC<ModalInputsProps> = ({ recado, descricao, openModal, actionCancel, actionConfirm }) => {
    const [recadoTitulo, setRecado] = useState<string>('');
    const [recadoDescricao, setRecadoDescicao] = useState<string>('');

    const dispatch = useAppDispatch();

    const handleClose = () => {
        actionCancel();
    };

    const handleConfirm = () => {
        const novoRecado: RecadoType = {
            id: Date.now(),
            recado: recadoTitulo,
            descricao: recadoDescricao
        };
        dispatch(addRecado(novoRecado));
        actionConfirm();
        setRecado('');
        setRecadoDescicao('');
    };
    return (
        <Box>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>{recado}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{descricao}</DialogContentText>
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
                        value={recadoTitulo}
                        autoFocus
                        margin="dense"
                        id="recado"
                        label="Titulo do recado"
                        type={'text'}
                        onChange={ev => setRecado(ev.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={recadoDescricao}
                        autoFocus
                        margin="dense"
                        id="descricao"
                        label="Descrição do recado"
                        type={'text'}
                        onChange={ev => setRecadoDescicao(ev.target.value)}
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
