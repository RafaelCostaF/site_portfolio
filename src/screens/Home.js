import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import ImgMediaCard from './ImgMediaCard';
import Background from './Background';
import { Link } from 'react-router-dom';


const StyledContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '2rem',
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
  borderRadius: 16,
  padding: '10px 24px',
  backgroundColor: '#ddd6cb',
  color: '#021028', // Cor do texto do botão
  '&:hover': {
    backgroundColor: '#448ACC', // Cor do botão ao passar o mouse
  },
  
});

function Home() {
  return (
    <Background>
      <StyledContainer maxWidth="lg">
        <Paper elevation={3} sx={{ backgroundColor: '#f5f5f5', padding: '2rem' }}> {/* Cor de fundo mais neutra */}
          <StyledText variant="h6" gutterBottom fontFamily={'Roboto'} fontSize={'22px'}> {/* Usando a fonte Roboto */}
            <strong>Boas vindas ao MyPortfolio! </strong>
          </StyledText>
          <StyledDivider />
          <Typography fontFamily='Roboto' align='center' fontSize={'20px'}> {/* Usando a fonte Roboto */}
            Seja bem-vindo ao nosso espaço digital, onde compartilhamos nossa jornada, paixões e conquistas.
            Aqui, você encontrará uma visão detalhada do nosso trabalho e habilidades, tudo reunido em um só lugar para sua exploração.
          </Typography>
          <StyledDivider />
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/Projetos" style={{textDecoration: 'none'}}>
              <ImgMediaCard name={"Projetos"} />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Link to="/Sobre" style={{textDecoration: 'none'}}>
              <ImgMediaCard name={"Sobre nós"} />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Link to="/Habilidades" style={{textDecoration: 'none'}}>
              <ImgMediaCard name={"Habilidades"} />
              </Link>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Link to="/Contatos" style={{textDecoration: 'none'}}>
              <StyledButton size='large' fullWidth>Realize seu projeto conosco!</StyledButton> 
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </StyledContainer>
    </Background>
  );
}

export default Home;
