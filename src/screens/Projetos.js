import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

function Projetos() {
  return (
    <Container sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Projetos
      </Typography>
      <Divider sx={{ margin: '2rem 0' }} />
      {/* Conteúdo do seu componente Projetos */}
    </Container>
  );
}

export default Projetos;
