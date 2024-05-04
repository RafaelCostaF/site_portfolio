import React, { useState } from "react";
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { AccountCircle as RyuIcon, Face as KenIcon } from '@mui/icons-material';

// Componentes de informações de personagens
function RyuInfo() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Ryu</Typography>
      <Typography variant="body1">Um mestre do estilo Ansatsuken.</Typography>
    </Container>
  );
}

function KenInfo() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Ken</Typography>
      <Typography variant="body1">Um amigo de infância de Ryu.</Typography>
    </Container>
  );
}

// Estilos customizados para os botões
const StyledButton = styled(Button)({
  background: 'rgba(255, 255, 255, 0.5)',
  transition: 'background 0.3s',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.7)',
  },
});

export default function CharacterSelection() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>Selecione seu personagem</Typography>
      <Box display="flex" justifyContent="center" gap="1rem">
        <StyledButton
          variant="contained"
          onClick={() => handleSelectCharacter('Ryu')}
          sx={{ borderRadius: '20px', overflow: 'hidden' }}
          startIcon={<RyuIcon />}
        >
          Ryu
        </StyledButton>
        <StyledButton
          variant="contained"
          onClick={() => handleSelectCharacter('Ken')}
          sx={{ borderRadius: '20px', overflow: 'hidden' }}
          startIcon={<KenIcon />}
        >
          Ken
        </StyledButton>
      </Box>
      {selectedCharacter === 'Ryu' && <RyuInfo />}
      {selectedCharacter === 'Ken' && <KenInfo />}
    </Container>
  );
}
