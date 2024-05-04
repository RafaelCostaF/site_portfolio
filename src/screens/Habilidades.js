import React from 'react';
import { Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';


const StyledView = styled('div')({
  textAlign: 'center',
  marginTop: '2rem'
});

const StyledText = styled(Typography)({
  fontWeight: 'bold'
});

const StyledDivider = styled(Divider)({
  margin: '2rem 0'
});

function Habilidades() {
  return (
    <StyledView>
      <Container>
        <StyledText variant="h4" gutterBottom>
          Habilidades
        </StyledText>
        <StyledDivider />
        <div>
          <Typography variant="h6" >Habilidades</Typography>
          <div style={{ backgroundColor: '#eee' }} />
        </div>
      </Container>
    </StyledView>
  );
}

export default Habilidades;
