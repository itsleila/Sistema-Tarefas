import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Typography, Button, Navbar, TextField } from '../components';
import { inserirTarefa } from '../utils/create';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Form = ({ onTarefaAdded, breakpoints }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { small, medium, large } = breakpoints;

  const [formValues, setFormValues] = useState({
    tarefa: 'comprar bolo',
    data: '2025-03-15',
    descricao: 'ir na padaria comprar bolo azul para o aniversario',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await inserirTarefa(formValues);
      setFormValues({
        tarefa: 'comprar bolo',
        data: '2025-03-15',
        descricao: 'ir na padaria comprar bolo azul para o aniversario',
      });
      setShowConfirmation(true);
      if (onTarefaAdded) {
        onTarefaAdded();
      }
      setTimeout(() => {
        setShowConfirmation(false);
      }, 2000);
    } catch (error) {
      console.error('Erro ao cadastrar tarefa:', error);
    }
  };

  return (
    <>
      <Navbar variant="menu" breakpoints={breakpoints} />
      <Div>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{ maxWidth: '500px', marginLeft: '-12px' }}
          >
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'rgba(96, 192, 191, 0.8)',
                padding: '27px',
                border: 'solid 3px',
                borderRadius: '5px',
              }}
            >
              <Grid item xs={12} sx={{ m: 2 }}>
                <Typography variant="h5" textAlign="center">
                  Crie uma tarefa para adicionar à lista
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="tarefa"
                  label="Tarefa"
                  value={formValues.tarefa}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="data"
                  label="Data"
                  type="date"
                  value={formValues.data}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="descricao"
                  label="Descrição"
                  value={formValues.descricao}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ m: 2 }}
                display="flex"
                justifyContent="center"
              >
                <Button type="submit" text="Adicionar" color="salmon" />
              </Grid>
              {showConfirmation && (
                <Grid item xs={12} sx={{ m: 2 }}>
                  <Typography
                    variant="caption"
                    textAlign="center"
                    sx={{ color: '#4e745b' }}
                  >
                    Tarefa adicionada com sucesso!
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </form>
      </Div>
    </>
  );
};

export default Form;
