import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { addUser, selectAllUsers } from '../store/modules/usuariosSlice';
import usuarioType from '../types/usuariosType';
import { useDispatch } from 'react-redux';
import { setUsuarioLogado } from '../store/modules/usuarioLogadoSlice';

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

    const [usuario, setUsuario] = useState<usuarioType>();
    const usuarios = useAppSelector(selectAllUsers);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (modo === 'cadastro') {
            const emailValido = (email.endsWith('.com') || email.endsWith('.com.br')) && email.includes('@');

            if (email.length > 0) {
                setErroEmail(!emailValido);
            }
            const senhaValida = senha.length >= 6;
            if (senha.length > 0) {
                setErroSenha(!senhaValida);
            }

            const reSenhaValida = senha === reSenha;
            if (reSenha.length > 0) {
                setErroReSenha(!reSenhaValida);
            }

            setDisable(!(emailValido && senhaValida && reSenhaValida));
        }
    }, [email, senha, reSenha, modo]);

    useEffect(() => {
        localStorage.setItem('listaUsuarios', JSON.stringify(usuarios));
    }, [usuarios]);

    function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        if (modo === 'login') {
            const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

            if (!usuarioEncontrado) {
                alert('E-mail ou senha inválidos!');
                return;
            }
            dispatch(
                setUsuarioLogado({
                    email: usuarioEncontrado.email,
                    senha: usuarioEncontrado.senha,
                    recados: usuarioEncontrado.recados
                })
            );

            navigate('/Recados');
        } else {
            const novoUsuario = {
                email,
                senha,
                recados: []
            };

            const retorno = usuarios.some(value => value.email === novoUsuario.email);

            if (retorno) {
                alert('Esse e-mail já está cadastrado por outro usuário');
                return;
            }

            dispatch(addUser(novoUsuario));
        }
    }

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
                error={erroEmail}
                helperText={erroEmail ? 'Email inválido' : ''}
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
                error={erroSenha}
                helperText={erroSenha ? 'Senha deve conter ao menos 6 caracteres' : ''}
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
                    error={erroReSenha}
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

            <Button
                disabled={disabled}
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
