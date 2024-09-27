import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { createAccount } from '../utils/createAccount';

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

const CriarConta = () => {
  const {
    email,
    setEmail,
    senha,
    setSenha,
    confirmarSenha,
    setConfirmarSenha,
    error,
    successMessage,
    handleCreateAccount,
  } = createAccount();

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
              Bem-vindo, crie uma conta
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
          <Grid item xs={12}>
            <TextField
              id="confirmPassword"
              label="Confirmar Senha"
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography variant="body2" color="error" textAlign="center">
                {error}
              </Typography>
            </Grid>
          )}
          {successMessage && (
            <Grid item xs={12}>
              <Typography variant="body2" color="success" textAlign="center">
                {successMessage}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} display="flex" justifyContent="center">
            <CheckBox label="Concorda com os termos e condições?" />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              fullWidth
              text="Criar Conta"
              color="purple"
              onClick={handleCreateAccount}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <LinkText to="/login">Já tem uma conta?</LinkText>
          </Grid>
        </Grid>
      </Grid>
    </Div>
  );
};

export default CriarConta;
