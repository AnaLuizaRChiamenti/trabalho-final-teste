import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, Box, Typography, IconButton, Fab } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import ModalInputs from '../components/modalAddInput';
import { SelectAllRecados } from '../store/modules/recadosSlice';
import { useAppSelector } from '../store/hooks';

const Recados: React.FC = () => {
    const [openAdd, setOpenAdd] = React.useState(false);
    const recadosLista = useAppSelector(SelectAllRecados);

    const handleClose = () => {
        setOpenAdd(false);
    };
    const addRecados = () => {
        setOpenAdd(false);
    };
    const openModalImput = () => {
        setOpenAdd(true);
    };
    return (
        <Grid container sx={{ width: '100%', height: '100vh' }} bgcolor="#D7F2BA">
            <Box width="100%" height="100%" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                        {recadosLista.map(recados => (
                            <Grid item key={recados?.id}>
                                <Card
                                    sx={{
                                        maxWidth: 300,
                                        boxShadow:
                                            '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);'
                                    }}
                                >
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {recados.recado}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {recados.descricao}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex' }}>
                                        <IconButton aria-label="favorite">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Fab
                    onClick={openModalImput}
                    color="info"
                    aria-label="add"
                    sx={{
                        position: 'absolute',
                        right: '20px',
                        bottom: '20px',
                        bgcolor: '#222'
                    }}
                >
                    <AddIcon />
                </Fab>
                <ModalInputs
                    recado="Adicionar"
                    descricao="Escreva o recado aqui bçabçla"
                    openModal={openAdd}
                    actionConfirm={addRecados}
                    actionCancel={handleClose}
                />
            </Box>
        </Grid>
    );
};

export default Recados;
