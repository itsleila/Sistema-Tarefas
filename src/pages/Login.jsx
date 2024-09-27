import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fazerLogin } from '../utils/login';
import Icon from '../assets/AvatarIconCoala.svg';
import styled from 'styled-components';
import {
  Grid,
  TextField,
  CheckBox,
  Avatar,
  Typography,
  Button,
} from '../components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px;
  font-size: 14px;

  &:hover {
    color: #60c0bf;
    font-weight: 700;
  }
`;

const Login = ({ setUsuario }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const { usuario, error, successMessage } = await fazerLogin(
        email,
        senha,
        setUsuario,
        setError,
        navigate,
      );

      if (error) {
        setError(error);
      } else {
        console.log(successMessage);
        navigate('/home');
      }
    } catch (error) {
      setError('Ocorreu um erro ao fazer login, tente novamente mais tarde.');
      console.error('Erro no login:', error);
    }
  };

  return (
    <Div>
      <Grid
        container
        spacing={3}
        maxWidth="500px"
        alignItems="center"
        sx={{ marginLeft: '-12px' }}
      >
        <Grid
          sx={{
            backgroundColor: '#e06b6b',
            padding: '27px',
            border: 'solid 3px',
            borderRadius: '5px',
          }}
        >
          <Grid item xs={12} display="flex" justifyContent="center">
            <Avatar size={80} src={Icon} />
          </Grid>
          <Grid item xs={12} sx={{ m: 2 }}>
            <Typography variant="h5" textAlign="center">
              Bem-vindo de volta!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginBottom: '10px' }}
          >
            <CheckBox label="Lembre-se de mim" />
            <Link
              to="/login"
              style={{
                fontSize: '14px',
                color: '#7fbc95',
                marginLeft: 3,
              }}
            >
              Esqueceu a senha?
            </Link>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              fullWidth
              text="Entrar"
              color="purple"
              onClick={handleLogin}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <LinkText to="/criarConta">Criar uma conta nova</LinkText>
          </Grid>
        </Grid>
      </Grid>
    </Div>
  );
};

export default Login;
