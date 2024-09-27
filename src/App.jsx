import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Loading from './components/Loading';
import { ProtectedRoute } from './components';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const CriarConta = lazy(() => import('./pages/CriarConta'));
const Formulario = lazy(() => import('./pages/Form'));
const Lista = lazy(() => import('./pages/List'));

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const breakpoints = {
  small: '599px',
  medium: '768px',
  large: '899px',
};

const App = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioSalvo) {
      setUsuario(usuarioSalvo);
    }
  }, []);

  const atualizarUsuario = (novoUsuario) => {
    setUsuario(novoUsuario);
    localStorage.setItem('usuario', JSON.stringify(novoUsuario));
  };

  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Login setUsuario={atualizarUsuario} />} />
            <Route
              path="/home"
              element={
                <Home
                  breakpoints={breakpoints}
                  usuario={usuario}
                  handleLogout={handleLogout}
                />
              }
            />
            <Route
              path="/criarConta"
              element={<CriarConta setUsuario={atualizarUsuario} />}
            />
            <Route
              path="/formulario"
              element={
                <ProtectedRoute usuario={usuario}>
                  <Formulario breakpoints={breakpoints} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/lista"
              element={
                <ProtectedRoute usuario={usuario}>
                  <Lista breakpoints={breakpoints} />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
