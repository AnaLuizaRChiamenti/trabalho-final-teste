import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { useNavigate } from 'react-router-dom';
import { SelecionarTodosUsuarios, addUsuarios } from '../store/modules/usuariosSlice';
import usuarioType from '../types/usuariosType';
import { usuarioLogadoSlice } from '../store/modules/usuarioLogadoSlice';

interface FormProps {
    modo: 'login' | 'cadastro';
    botaoSubmit: string;
}

const Form: React.FC<FormProps> = ({ modo, botaoSubmit }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [reSenha, setReSenha] = useState('');
    const [erroEmail, setErroEmail] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);
    const [erroReSenha, setErroReSenha] = useState(false);
    const [disabled, setDisable] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const usuarios = useAppSelector(SelecionarTodosUsuarios);

    useEffect(() => {
        if (modo === 'cadastro') {
            const emailValido = email.endsWith('.com') || (email.endsWith('.com.br') && email.includes('@'));
            const reSenhaValida = senha === reSenha;
            const senhaValida = senha.length >= 6;

            if (email.length > 0) {
                setErroEmail(!emailValido);
            }
            if (senha.length > 0) {
                setErroSenha(!senhaValida);
            }
            if (reSenha.length > 0) {
                setErroReSenha(!reSenhaValida);
            }

            setDisable(!(emailValido && senhaValida && reSenhaValida));
        }
    }, [email, senha, reSenha, modo]);

    const handleLogin = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const usuario = usuarios.find(user => user.email === email && user.senha === senha);

        if (usuario) {
            dispatch(usuarioLogadoSlice.actions.setUsuarioLogado(usuario));
            alert(`Bem-vindo, ${usuario.email}!`);
            navigate('/recados');
        } else {
            alert('Usuário não encontrado ou senha incorreta.');
        }
    };

    const handleCadastro = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (usuarios.some(u => u.email === email)) {
            alert('Esse email já está em uso. Escolha outro email.');
            return;
        } else if (usuarios.some(u => u.repetirSenha === senha)) {
            alert('As senhas precisam ser iguais.');

            return;
        } else {
            if (modo === 'cadastro') {
                const novoUsuario: usuarioType = {
                    email,
                    senha,
                    repetirSenha: reSenha,
                    recados: []
                };
                dispatch(addUsuarios(novoUsuario));
                alert('Cadastro realizado com sucesso! Faça o login.');
                navigate('/login');
            }
        }
        console.log(usuarios);
    };

    const handleSubmit = modo === 'login' ? handleLogin : handleCadastro;

    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="80%"
            onSubmit={e => handleSubmit(e)}
            sx={{ marginRight: 2, marginLeft: 2 }}
        >
            <TextField
                margin="normal"
                type="email"
                id="email"
                label="Email"
                value={email}
                onChange={e => {
                    setEmail(e.target.value);
                }}
                required
                fullWidth
            />
            <TextField
                margin="normal"
                type="password"
                id="senha"
                label="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                required
                fullWidth
            />

            {modo === 'cadastro' && (
                <TextField
                    margin="normal"
                    type="password"
                    id="ReSenha"
                    label="Repetir a senha"
                    onChange={e => setReSenha(e.target.value)}
                    helperText={erroReSenha ? 'As senhas não são iguais' : ''}
                    required
                    fullWidth
                />
            )}

            {modo === 'login' && (
                <FormControlLabel
                    sx={{ alignSelf: 'start', width: '100%' }}
                    control={<Checkbox />}
                    label="Permanecer conectado"
                />
            )}
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
                {botaoSubmit}
                {/* Quando o botão login for pressionado,
            enviar uma mensagem de bem vindo para o usuario */}
            </Button>
            {modo === 'cadastro' ? (
                <Grid container justifyContent="center">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            Ja tem uma conta? Faça o login!
                        </Link>
                    </Grid>
                </Grid>
            ) : (
                <Grid container justifyContent="center">
                    <Grid item>
                        <Link href="/Cadastro" variant="body2">
                            Não tem uma conta? Cadastre-se
                        </Link>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default Form;
