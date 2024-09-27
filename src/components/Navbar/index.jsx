import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { Avatar, IconButton } from '..';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import Icon from '../../assets/AvatarIconFem.svg';

const Nav = styled.nav`
  width: 100%;
  padding: 10px 0;
`;

const StyledLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 15px;
  min-width: 120px;
  text-align: center;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};

  &:hover {
    background-color: #d2a8ff;
  }
`;

const IconButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px;
  display: flex;
  justify-content: end;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};

  &:hover {
    background-color: #d2a8ff;
  }
`;

export default function Navbar({ variant, breakpoints }) {
  const [showMenu, setShowMenu] = useState(false);
  const { small, medium, large } = breakpoints;

  const isMobile = window.innerWidth < parseInt(small, 10);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  switch (variant) {
    case 'home':
      return (
        <Nav>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={6} md={3}>
              <StyledLink>
                <LinkText bgColor="#60c0bf" to="/home">
                  Home
                </LinkText>
              </StyledLink>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <StyledLink>
                <LinkText bgColor="#f7cb66" to="/lista">
                  Lista de Tarefas
                </LinkText>
              </StyledLink>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <StyledLink>
                <LinkText bgColor="#7fbc95" to="/formulario">
                  Adicionar Tarefa
                </LinkText>
              </StyledLink>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <StyledLink>
                <LinkText bgColor="#f67575" to="/">
                  Sair
                </LinkText>
              </StyledLink>
            </Grid>
          </Grid>
        </Nav>
      );
    case 'menu':
      return (
        <Nav>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6} sm={6} md={3}>
              <Avatar size={50} src={Icon} />
            </Grid>
            {isMobile && (
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <IconButton
                  onClick={toggleMenu}
                  sx={{
                    backgroundColor: '#f7cb66',
                  }}
                >
                  {showMenu ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Grid>
            )}
            {showMenu && (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <StyledLink>
                      <LinkText bgColor="#60c0bf" to="/home">
                        Home
                      </LinkText>
                    </StyledLink>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <StyledLink>
                      <LinkText bgColor="#f7cb66" to="/lista">
                        Lista de Tarefas
                      </LinkText>
                    </StyledLink>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <StyledLink>
                      <LinkText bgColor="#7fbc95" to="/formulario">
                        Adicionar Tarefa
                      </LinkText>
                    </StyledLink>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <StyledLink>
                      <LinkText bgColor="#f67575" to="/">
                        Sair
                      </LinkText>
                    </StyledLink>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
          {!isMobile && (
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6} sm={6} md={3}>
                <StyledLink>
                  <LinkText bgColor="#60c0bf" to="/home">
                    Home
                  </LinkText>
                </StyledLink>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <StyledLink>
                  <LinkText bgColor="#f7cb66" to="/lista">
                    Lista de Tarefas
                  </LinkText>
                </StyledLink>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <StyledLink>
                  <LinkText bgColor="#7fbc95" to="/formulario">
                    Adicionar Tarefa
                  </LinkText>
                </StyledLink>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <StyledLink>
                  <LinkText bgColor="#f67575" to="/">
                    Sair
                  </LinkText>
                </StyledLink>
              </Grid>
            </Grid>
          )}
        </Nav>
      );
    default:
      break;
  }

  return null;
}
