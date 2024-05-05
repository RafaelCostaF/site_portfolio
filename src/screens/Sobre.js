import React from 'react';
import { Container, Typography, Paper } from '@mui/material';


function Sobre() {
  return (
    
    <Container maxWidth="md" sx={{ marginTop: '4rem' }}>
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
        <Typography variant="h5" gutterBottom>
          Equipe
        </Typography>
        <Typography variant="body1">
          Rafael e Rickson são membros valiosos de nossa equipe. Aqui está um breve resumo de suas informações:
        </Typography>
        <Typography variant="h6" gutterBottom>
          Rafael
        </Typography>
        <Typography variant="body1">
        Cursando o último semestre de sistemas de informação na Universidade do Estado da Bahia(UNEB)        </Typography>
        <Typography variant="h6" gutterBottom>
          Rickson
        </Typography>
        <Typography variant="body1">
          Cursando o último semestre de sistemas de informação na Universidade do Estado da Bahia(UNEB), pronto para novos desafios.
        </Typography>
      </Paper>
    </Container>

  );
}

export default Sobre;
