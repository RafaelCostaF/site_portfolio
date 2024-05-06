import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';

function ProjectCard({ title, description, link, image }) {
  return (
    <Paper elevation={3} sx={{ p: 2, position: 'relative' }}>
      {/* Image positioned on top */}
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '200px', // Adjust the height as needed
          objectFit: 'cover', // Maintain aspect ratio and cover the container
          borderRadius: '4px 4px 0 0', // Rounded corners for the top
          position: 'absolute', // Position on top of the card
          top: 0, // Align to the top of the card
          left: 0, // Align to the left of the card
        }}
      />
      {/* Content */}
      <div style={{ marginTop: '200px', padding: '16px' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Button component={Link} to={link} variant="contained" size="medium">
          
          Ver detalhes
        </Button>
      </div>
    </Paper>
  );
}


export default function Projetos() {
  const projects = [
    {
      title: 'Mobile - Emprestimo',
      description: 'React Native App Emprestimo',
      link: 'https://github.com/RafaelCostaF/React-Native-APP-Emprestimo',
      image: "https://github.com/RafaelCostaF/React-Native-APP-Emprestimo/raw/main/img/Capture-inputs.png"
    },
    {
      title: 'API - Emprestimo',
      description: 'API para aplicativo de emprestimo',
      link: 'https://github.com/RafaelCostaF/API-Emprestimo',
      image:"https://github.com/RafaelCostaF/API-Emprestimo/raw/main/img/example.png"
    },
    {
      title: 'Stream It',
      description: 'Video Room Server',
      link: 'https://github.com/RafaelCostaF/Video-Room-Server',
      image:"https://private-user-images.githubusercontent.com/57494016/328062161-589a387d-d2d9-41fa-a00f-0a75c5b12228.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ5NTgxMTIsIm5iZiI6MTcxNDk1NzgxMiwicGF0aCI6Ii81NzQ5NDAxNi8zMjgwNjIxNjEtNTg5YTM4N2QtZDJkOS00MWZhLWEwMGYtMGE3NWM1YjEyMjI4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTA2VDAxMTAxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYyMDAzYjE1Y2Q3ODY0MWZmZDg3ZDNhZDU4MWUzMWI3ZWE4MjgwZjQ5NjkwYzYxODJkYzk3NjlkMDZmZDkwNjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.PQ-VCZloi0maD4uw5xZQyptba4Ct1XsiZG9cV8r7354"
    },
    {
      title: 'Pokemon TCP Server',
      description: 'Este projeto tem como objetivo recuperar informações sobre as criaturas Pokémon.',
      link: 'https://github.com/Rickson0/PokemonServer',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexJsJReVXLmTqdNXFkANtYd05LMnvXYsM21W9HLZehw&s"
    },
    {
      title: 'Site E-commerce',
      description: 'Site de E-commerce.',
      link: 'https://github.com/Rickson0/compraCerta',
      image:"https://private-user-images.githubusercontent.com/57494016/328062668-c3833570-f6f8-44bc-be41-2ac6ac7d8cf1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ5NTg2MTQsIm5iZiI6MTcxNDk1ODMxNCwicGF0aCI6Ii81NzQ5NDAxNi8zMjgwNjI2NjgtYzM4MzM1NzAtZjZmOC00NGJjLWJlNDEtMmFjNmFjN2Q4Y2YxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTA2VDAxMTgzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFlZGIxMzI4MDkzYTI5YmY3ZjI5YzRmZWQwN2U5OWUzNjJkZDllMjQyNzQ0YjgzY2ZkMzhkNTBkZjI0MTNhMmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fNGkBaD3kMcYX2oCOuG3XWnDJMkHoqljrnQcDA0rGv4"
    },

    
  ];

  return (
   
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projetos
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>

  );
}
