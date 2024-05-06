import React, { useState , useEffect} from 'react';
import { Container, Grid, Typography, Divider, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';


function ListaMensagens({ mensagens }) {
  return (
    <div style={{ maxHeight: '250px', width: 'auto', overflowY: 'auto', padding: '20px' }}>
      {mensagens.map((msg, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div style={{padding:2, display:"inline"}}>
            <h4 style={{ marginBottom: '0', display:"inline"}}>{msg.nome}</h4>
          </div>

          <span style={{display: "inline-block", width: "8px",  height: "8px", backgroundColor: "black", borderRadius: "50%", marginRight: "5px"}}></span>

          <div style={{padding:2, display:"inline"}}>
            <i style={{ marginBottom: '0', display:"inline" }}>{msg.email}</i> 
          </div>
          <div>{msg.mensagem}</div>
          <hr/>
        </div>
      ))}
    </div>
  );
}

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

  const [mensagens, setMensagens] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/api/contato', { nome, email, mensagem });

      loadMensagens();
      // Definindo o estado como "enviado" para exibir uma mensagem de confirmação
      setEnviado(true);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMensagens();
  }, []);

  const loadMensagens = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/contatos');
      setMensagens(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  


  return (

    <StyledView>
      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        <Paper elevation={3} sx={{ padding: 4, backgroundColor: "#FEFAF6" }}>
          <StyledText variant="h4" gutterBottom>
            Contato
          </StyledText>
          <StyledDivider />
          <Typography fontFamily='Monospaced' align='center' fontSize={'24px'}>
            Mande uma mensagem para nós, ficaremos felizes em responder!
          </Typography>
          <StyledDivider />
          

          <ListaMensagens mensagens={mensagens}/>
          <StyledDivider/>

          {enviado ? (
            <>
              <Typography variant="h6" style={{marginBottom:20}}>Mensagem enviada com sucesso!</Typography>
              <Button onClick={()=> setEnviado(false)} variant="contained" color="primary" >Enviar nova mensagem</Button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{margin:20}}>
                <TextField
                  label="Nome"
                  variant="outlined"
                  fullWidth
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div style={{margin:20}}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{margin:20}}>
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
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          )}
        </Paper>
      </Container>
      
    </StyledView>
  );
}

export default Contato;
