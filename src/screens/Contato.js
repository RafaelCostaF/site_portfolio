import React, { useState } from 'react';
import { Container, Typography, Divider, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

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

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contato', { nome, email, mensagem });
      setEnviado(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledView>
      <Container>
        <StyledText variant="h4" gutterBottom>
          Contato
        </StyledText>
        <StyledDivider />
        {enviado ? (
          <Typography variant="h6">Mensagem enviada com sucesso!</Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label="Nome"
                variant="outlined"
                fullWidth
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="E-mail"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Mensagem"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
            <div style={{ marginTop: '1rem' }}>
              <Button type="submit" variant="contained" color="primary">
                Enviar Mensagem
              </Button>
            </div>
          </form>
        )}
      </Container>
    </StyledView>
  );
}

export default Contato;
