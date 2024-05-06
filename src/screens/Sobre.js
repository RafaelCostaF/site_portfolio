import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Margin } from '@mui/icons-material';


function Sobre() {
  return (
    
    <Container maxWidth="md" sx={{ marginTop: '4rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem' }}>
        <div style={{marginBottom: 20}}>
          <Typography variant="h4" gutterBottom>
            Sobre
          </Typography>
          <Typography variant="body1">
            Bem-vindo à nossa página Sobre!
          </Typography>
          
          <Typography variant="body1">
            Aqui você pode encontrar informações sobre nossa empresa, equipe ou qualquer outra coisa que desejamos compartilhar.
          </Typography>
        </div>


        <Typography variant="h5" gutterBottom>
          Equipe
        </Typography>
        <Typography variant="body1">
          Rafael e Rickson são membros valiosos de nossa equipe. Aqui está um breve resumo de suas informações:
        </Typography>
        
        
        <Box display="flex" alignItems="center" gap={2}>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQHYFMzYsoMFjg/profile-displayphoto-shrink_200_200/0/1699222207407?e=1720656000&v=beta&t=hErPMnymM_bGKVW9J8g1Da0KKbUp6Ic0uUjeImP6OkY"
            alt="Profile"
            style={{ borderRadius: '50%', width: 100, height: 100 , padding:50}}
          />
          <Box>
            <Typography variant="h6" gutterBottom>
              Rafael
            </Typography>
            <Typography variant="body1">
              Cursando o último semestre de sistemas de informação na Universidade do Estado da Bahia (UNEB)
            </Typography>
          </Box>
        </Box>


        <Box display="flex" alignItems="center" gap={2}>
          <img
            src="https://media.licdn.com/dms/image/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_200_200/0/1660002772504?e=1715562000&v=beta&t=hP-w0jPJmK_0FsmsEm_L0lf4Yk-y08AlABaEWkjLtNQ"
            alt="Profile Rickson"
            style={{ borderRadius: '50%', width: 100, height: 100 , padding:50}}
          />
          <Box>
            <Typography variant="h6" gutterBottom>
              Rickson
            </Typography>
            <Typography variant="body1">
              Cursando o último semestre de sistemas de informação na Universidade do Estado da Bahia(UNEB), pronto para novos desafios.
            </Typography>
          </Box>
        </Box>
        

                </Paper>
    </Container>

  );
}

export default Sobre;
