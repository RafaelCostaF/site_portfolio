import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Typography, Button } from '@mui/material';

function NotFoundScreen() {
  return (
    <Container sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Página não encontrada
      </Typography>
      <Typography variant="body1">
        Desculpe, a página que você está procurando não foi encontrada.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
        Ir para a página inicial
      </Button>
    </Container>
  );
}

export default NotFoundScreen;
