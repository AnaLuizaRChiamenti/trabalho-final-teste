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
            <Box width="100%" bgcolor="#EFF7CF" paddingTop="4.5rem">
                <Grid container width="100%">
                    {listTaks.map(note => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={note?.id}
                            display="flex"
                            justifyContent="center"
                            flexDirection="row"
                        >
                            <Card
                                sx={{
                                    width: '300px',
                                    height: '150px',
                                    marginY: '25px',
                                    marginX: '15px'
                                }}
                            >
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {note.title}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {note.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', height: '40%' }}>
                                    <IconButton aria-label="edit" onClick={() => handleEdit(note)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => handleDelete(note)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Fab
                onClick={openModalImput}
                color="info"
                aria-label="add"
                sx={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px',
                    bgcolor: '#222',
                    width: '80px',
                    height: '80px',
                    boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.301), 5px 10px 20px rgba(0, 0, 0, 0.301);'
                }}
            >
                {<AddIcon fontSize="large" />}
            </Fab>
            {openModalEdit && (
                <ModalInputsEdit
                    openModal={openModalEdit}
                    actionConfirm={addNotesEdit}
                    actionCancel={handleCloseEdit}
                    task={editedTaks}
                />
            )}

            <ModalInputs openModal={openAdd} actionConfirm={addNotes} actionCancel={handleClose} />
        </Grid>
    );
};

export default Notes;
