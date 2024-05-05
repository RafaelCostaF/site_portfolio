import React from 'react';
import { Container, Typography, Divider, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ImgMediaCard from './ImgMediaCard';

const StyledView = styled('div')({
  textAlign: 'center',
  marginTop: '2rem',
});

const StyledText = styled(Typography)({
  fontWeight: 'bold',
});

const StyledDivider = styled(Divider)({
  margin: '2rem 0',
});

const skillsRickson = [
  "Habilidade 1",
  "Habilidade 2",
  "Habilidade 3",
];

const skillsRafael = [
  "Habilidade A",
  "Habilidade B",
  "Habilidade C",
];

function Habilidades() {
  return (
    <StyledView>
      <Container>
        <StyledText variant="h4" gutterBottom>
          Habilidades
        </StyledText>
        <StyledDivider />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ImgMediaCard
              alt="Rickson"
              title="Rickson"
              content={skillsRickson.map((skill) => `- ${skill}\n`)}
           
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ImgMediaCard
              alt="Rafael"
              title="Rafael"
              content={skillsRafael.map((skill) => `- ${skill}\n`)}
              
            />
          </Grid>
        </Grid>
      </Container>
    </StyledView>
  );
}

export default Habilidades;
