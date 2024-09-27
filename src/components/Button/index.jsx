import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    blueRibbon: {
      main: '#0b4fff',
      contrastText: '#e2e8f0',
    },
    purple: {
      main: '#b571ea',
    },
    salmon: {
      main: '#e06b6b',
    },
    zinc95: {
      main: '#09090b',
      contrastText: '#d4d4d8',
    },
  },
});

const DefaultButton = ({
  text = 'Enviar',
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  sx,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variant}
        size={size}
        color={color}
        sx={{
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#4e76ff',
          },
          '&:focus': {
            outline: 'none',
          },
          ...sx,
        }}
        {...props}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default DefaultButton;
