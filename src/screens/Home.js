import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import ImgMediaCard from './ImgMediaCard';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '2rem',
  overflowY: 'auto', 
  maxHeight: 'calc(100vh - 64px)', 
});

const StyledText = styled(Typography)({
  fontWeight: 'bold',
});

const StyledDivider = styled('div')({
  margin: '2rem 0',
  height: '1px',
  backgroundColor: '#eee',
});

const StyledButton = styled(Button)({
  borderRadius: 5,
  padding: '10px 24px',
  backgroundColor: '#102C57',
  color: 'white',
  '&:hover': {
    backgroundColor: '#448ACC',
  },
});

function Home() {
  return (
    <StyledContainer maxWidth="lg">
      <Paper elevation={3} sx={{ backgroundColor: '#FEFAF6', padding: '2rem' }}>
        <StyledText variant="h6" gutterBottom fontFamily={'Monospace'} fontSize={'22px'}>
          <strong>Boas vindas ao MyPortfolio! </strong>
        </StyledText>
        <StyledDivider />
        <Typography fontFamily='Monospace' align='center' fontSize={'20px'}>
          Seja bem-vindo ao nosso espaço digital, onde compartilhamos nossa jornada, paixões e conquistas.
          Aqui, você encontrará uma visão detalhada do nosso trabalho e habilidades, tudo reunido em um só lugar para sua exploração.
        </Typography>
        <StyledDivider />
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/Projetos" style={{ textDecoration: 'none' }}>
              <ImgMediaCard
                action="Projetos"
                image={process.env.PUBLIC_URL + '/project.svg'}
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/Sobre" style={{ textDecoration: 'none' }}>
              <ImgMediaCard
                action="Sobre nós"
                image={process.env.PUBLIC_URL + '/people.svg'}
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/Habilidades" style={{ textDecoration: 'none' }}>
              <ImgMediaCard action="Habilidades"
                image={process.env.PUBLIC_URL + '/codes.png'}
              />
            </Link>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Link to="/Contatos" style={{ textDecoration: 'none' }}>
              <StyledButton size='large' fullWidth>Realize seu projeto conosco!</StyledButton>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </StyledContainer>
  );
}

export default Home;
