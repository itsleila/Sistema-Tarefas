import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar, ListComponent, Navbar, Typography } from '../components';
import Icon from '../assets/AvatarIconFem.svg';
import { Box } from '@mui/system';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Main = styled.main`
  padding: 15px;
`;

const Home = ({ breakpoints, usuario }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!usuario) {
      navigate('/login');
    }
  }, [usuario, navigate]);

  const { small, medium, large } = breakpoints;

  return (
    <>
      <Header>
        <TextContainer>
          <Typography variant="h4">Olá humano,</Typography>
          <Typography variant="body2">
            gerencie suas tarefas diarias.
          </Typography>
        </TextContainer>
        <Avatar size={70} src={Icon} />
      </Header>
      <Box
        sx={{
          backgroundColor: '#60c0bf',
          width: '100%',
          height: '2px',
          marginTop: '16px',
        }}
      />
      <Navbar variant="home" breakpoints={breakpoints} />
      <Main>
        <Typography variant="body1">tarefas de hoje:</Typography>
        <ListComponent />
      </Main>
    </>
  );
};

export default Home;
