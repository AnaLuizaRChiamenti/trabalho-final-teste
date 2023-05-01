import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, Box, Typography, IconButton, Fab } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddIcon from '@mui/icons-material/Add';

import * as React from 'react';

export default function Recados() {
    return (
        <Grid container width="100%" height="100vh" bgcolor="#FFE1C6">
            <Grid item width="100%" sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <Grid container spacing={2} width="100%">
                    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                        <Card
                            sx={{
                                margin: '15px',
                                maxWidth: 300,
                                boxShadow:
                                    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);'
                            }}
                        >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Recado
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging across all continents except Antarctica
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
                        <Card
                            sx={{
                                margin: '15px',
                                maxWidth: 300,
                                boxShadow:
                                    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);'
                            }}
                        >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Recado
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging across all continents except Antarctica
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
                </Grid>
                <Fab
                    size="medium"
                    color="secondary"
                    aria-label="add"
                    sx={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        display: 'flex'
                    }}
                >
                    <AddIcon />
                </Fab>
            </Grid>
        </Grid>
    );
}
