import React from 'react';
import { Container, Typography, Divider, LinearProgress,Paper } from '@mui/material';
import { styled } from '@mui/system';


const StyledSkill = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const SkillName = styled(Typography)({
  marginRight: '16px',
  fontWeight: 'bold',
  width: '120px', // Define uma largura fixa para os nomes das habilidades
});

const SkillProgress = styled(LinearProgress)({
  flex: 1, // A barra de progresso ocupa o espaço restante
  height: '24px', // Altura da barra de progresso
  backgroundColor: '#e0e0e0', // Cor de fundo da barra de progresso
  borderRadius: '12px', // Borda arredondada
  overflow: 'hidden', // Oculta o conteúdo que ultrapassa a barra de progresso
  '& .MuiLinearProgress-bar': {
    borderRadius: '12px', // Borda arredondada para a barra de preenchimento
    backgroundImage: 'linear-gradient(45deg, #001f3f, #0066cc)', // Gradiente de cores para o preenchimento
  },
});

function Habilidades() {
  // Defina as habilidades de Rickson e Rafael
  const habilidadesPorPessoa = {
    Rickson: [
      { name: 'JavaScript', proficiency: 30 },
      { name: 'React', proficiency: 20 },
      { name: 'HTML', proficiency: 30 },
      { name: 'CSS', proficiency: 20 },
      { name: 'Python', proficiency: 80 },
      { name: 'C++', proficiency: 85 },
      { name: 'java', proficiency: 70 },
      { name: 'Mysql', proficiency: 60 }
      // Adicione mais habilidades conforme necessário
    ],
    Rafael: [
      { name: 'Python', proficiency: 85 },
      { name: 'Django', proficiency: 75 },
      { name: 'SQL', proficiency: 80 },
      { name: 'Java', proficiency: 70 },
      // Adicione mais habilidades conforme necessário
    ],
  };

  return (
 
      <Container  maxWidth="md" sx={{ marginTop: '4rem' }}>
        <Paper elevation={3} sx={{padding:4, backgroundColor: "#FEFAF6"}}>
        <Typography variant="h4" gutterBottom>
          Habilidades
        </Typography>
        <Divider />
        {Object.keys(habilidadesPorPessoa).map((pessoa, index) => (
          <div key={index}>
            <Typography variant="h5" gutterBottom>
              Habilidades de {pessoa}:
            </Typography>
            {habilidadesPorPessoa[pessoa].map((skill, skillIndex) => (
              <StyledSkill key={skillIndex}>
                <SkillName>{skill.name}</SkillName>
                <SkillProgress variant="determinate" value={skill.proficiency} />
              </StyledSkill>
            ))}
            <Divider />
          </div>
        ))}
        </Paper>
      </Container>
  
  );
}

export default Habilidades;
