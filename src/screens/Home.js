import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Paper } from '@mui/material';

// Estilizando o container com Material-UI
const StyledContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '2rem'
});

// Estilizando o texto com Material-UI
const StyledText = styled(Typography)({
  fontWeight: 'bold'
});

// Estilizando o separador com Material-UI
const StyledDivider = styled('div')({
  margin: '2rem 0',
  height: '1px',
  backgroundColor: '#eee'
});

function Home() {
  return (
    <StyledContainer maxWidth="md">
      <Paper elevation={3} sx={{ padding: '2rem' }}>
        <StyledText variant="h4" gutterBottom>
          Home
        </StyledText>
        <StyledDivider />
      </Paper>
    </StyledContainer>
  );
}

export default Home;
