import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import checkImage from '../images/checkImage.png';
import Form from '../components/Form';
import { useAppSelector } from '../store/hook';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const styleForm = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        bgcolor: 'white'
    };
    const lembrarUsuario = useAppSelector(state => state.usuarioLogado.usuario);
    /*     useEffect(() => {
        if (!(lembrarUsuario.email === '')) {
            navigate('/recados');
        }
    }, [navigate]);
 */
    return (
        <Grid container height="100vh" width="100vw" bgcolor="#D7F2BA">
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

            <Grid item md={5} sm={12} xs={12} alignItems="center" justifyContent="center" boxShadow={5}>
                <Box sx={styleForm}>
                    <Avatar sx={{ bgcolor: '#D0A8E4' }}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography variant="h4" margin={2} color="black">
                        Faça seu login
                    </Typography>
                    <Form modo="login" botaoSubmit="Login" />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
