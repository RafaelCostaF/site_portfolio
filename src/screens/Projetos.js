import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';



function ProjectCard({ title, description, link }) {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
      <Button component={Link} to={link} variant="contained" size="small">
        Ver detalhes
      </Button>
    </Paper>
  );
}


export default function Projetos() {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      link: '/projeto-1',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      link: '/projeto-2',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do Projeto 3',
      link: '/projeto-3',
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
            />
          </Grid>
        ))}
      </Grid>
    </Container>

  );
}
