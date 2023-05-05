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
import { useAppDispatch, useAppSelector } from '../store/hooks';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import taskType from '../types/taskType';
import { deleteTask } from '../store/modules/UserLoggedSlice';
import ModalInputsEdit from '../components/modalEditar';

const Notes: React.FC = () => {
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openModalEdit, setOpenModalEdit] = React.useState(false);
    const listTaks = useAppSelector(state => state.user.userLogged.tasks);
    const [editedTaks, setEditedTaks] = React.useState<taskType>({} as taskType);

    const dispatch = useAppDispatch();

    const handleClose = () => {
        setOpenAdd(false);
    };
    const addNotes = () => {
        setOpenAdd(false);
    };
    const openModalImput = () => {
        setOpenAdd(true);
    };

    const handleDelete = (item: taskType) => {
        dispatch(deleteTask(item.id));
    };

    const handleEdit = (item: taskType) => {
        setEditedTaks(item);

        setOpenModalEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenModalEdit(false);
    };

    const addNotesEdit = () => {
        setOpenModalEdit(false);
    };

    return (
        <Grid container sx={{ width: '100%', height: '100vh' }}>
            <ResponsiveAppBar />
            <Box width="100%" height="100%" sx={{ display: 'flex', justifyContent: 'center' }} paddingTop="4.5rem">
                <Grid container width="100%" justifyContent="center" marginTop="15px">
                    <Grid container width="100%">
                        {listTaks.map(note => (
                            <Grid item display="flex" flexDirection="row" key={note?.id}>
                                <Card
                                    sx={{
                                        width: '300px',
                                        height: '200px',
                                        margin: '20px',
                                        marginBottom: '0px !important'
                                    }}
                                >
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {note.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {note.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', height: '150px' }}>
                                        <IconButton onClick={() => handleEdit(note)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(note)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {openModalEdit && (
                        <ModalInputsEdit
                            openModal={openModalEdit}
                            actionConfirm={addNotesEdit}
                            actionCancel={handleCloseEdit}
                            task={editedTaks}
                        />
                    )}
                </Grid>
                <Fab
                    onClick={openModalImput}
                    color="info"
                    aria-label="add"
                    sx={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                        bgcolor: '#222'
                    }}
                >
                    <AddIcon />
                </Fab>
                <ModalInputs openModal={openAdd} actionConfirm={addNotes} actionCancel={handleClose} />
            </Box>
        </Grid>
    );
};

export default Notes;
