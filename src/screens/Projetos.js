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
      title: 'Projeto 3',
      description: 'Descrição do Projeto 3',
      link: 'https://github.com/RafaelCostaF/Video-Room-Server',
      image:""
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
