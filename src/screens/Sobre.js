import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Sobre() {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Sobre
        </Typography>
        <Typography variant="body1">
          Bem-vindo à nossa página Sobre!
        </Typography>
        <Typography variant="body1">
          Aqui você pode encontrar informações sobre nossa empresa, equipe ou qualquer outra coisa que desejamos compartilhar.
        </Typography>
      </Paper>
    </Container>
  );

}
export default Sobre;


