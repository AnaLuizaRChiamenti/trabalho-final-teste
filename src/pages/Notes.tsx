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
import { deleteTask, updateTask } from '../store/modules/UserLoggedSlice';
import ModalInputsEdit from '../components/modalEdital';

const Notes: React.FC = () => {
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openModalEdit, setOpenModalEdit] = React.useState(false);
    const listTaks = useAppSelector(state => state.user.userLogged.tasks);

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
        console.log(openModalEdit);

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
            <Box width="100%" height="100%" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                        {listTaks.map(note => (
                            <Grid item key={note?.id}>
                                <Card
                                    sx={{
                                        maxWidth: 300,
                                        boxShadow:
                                            '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);'
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
                                    <CardActions sx={{ display: 'flex' }}>
                                        <IconButton aria-label="favorite">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleEdit(note)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(note)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                                {openModalEdit && (
                                    <ModalInputsEdit
                                        openModal={openModalEdit}
                                        actionConfirm={addNotesEdit}
                                        actionCancel={handleCloseEdit}
                                        task={note}
                                    />
                                )}
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
                <ModalInputs openModal={openAdd} actionConfirm={addNotes} actionCancel={handleClose} />
            </Box>
        </Grid>
    );
};

export default Notes;
