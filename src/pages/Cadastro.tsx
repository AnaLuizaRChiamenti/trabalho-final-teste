import AssignmentIcon from '@mui/icons-material/Assignment';
import { Grid, Box, Avatar, Typography, TextField, Button, Link } from '@mui/material';
import React from 'react';

import checkImage from '../images/checkImage.png';

const Cadastro: React.FC = () => {
    const styleForm = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        bgcolor: 'white'
    };
    return (
        <Grid container height="100vh" width="100vw" bgcolor="#D7F2BA">
            <Grid item md={5} sm={12} xs={12} display="flex" alignItems="center" justifyContent="center" boxShadow={5}>
                <Box sx={styleForm}>
                    <Avatar sx={{ bgcolor: '#D0A8E4' }}>
                        <AssignmentIcon />
                    </Avatar>
                    <Typography variant="h4" margin={2} color="black">
                        Faça seu cadastro
                    </Typography>

                    <Box component="form" sx={{ marginRight: 2, marginLeft: 2 }}>
                        <TextField margin="normal" type="email" id="email" label="Email" fullWidth />
                        <TextField margin="normal" type="password" id="senha" label="Senha" fullWidth />
                        <TextField margin="normal" type="password" id="repetirSenha" label="Repetir Senha" fullWidth />
                    </Box>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            mb: 2,
                            mt: 2,
                            padding: '5px',
                            borderRadius: '5px',
                            width: '50%',
                            backgroundColor: '#D0A8E4',
                            color: 'black',
                            '&:hover': {
                                backgroundColor: '#D0A8E4',
                                boxShadow: 'none'
                            }
                        }}
                    >
                        Cadastrar
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Ja tem uma conta? Faça o login!
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            <Grid
                item
                md={7}
                sm={12}
                xs={false}
                sx={{
                    display: { xs: 'none', sm: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box component="img" alt="Desenho-menina-marcando-um-botao-check" src={checkImage} width="70%" />
            </Grid>
        </Grid>
    );
};

export default Cadastro;
