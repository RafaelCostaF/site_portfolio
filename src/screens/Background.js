import React from 'react';
import styled from 'styled-components';

// Estilizando o componente de background com styled-components
const BackgroundStyle = styled.div`
  backgroundImage: 'linear-gradient(to bottom, #052659, #000)'; 
  height: 100vh; /* Define a altura para cobrir toda a tela verticalmente */
  display: flex;
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
`;

// Estilizando o conteúdo do componente
const Content = styled.div`
  text-align: center;
  color: #FFFFFF; /* Cor do texto */
`;

const Background = ({ children }) => {
  return (
    <BackgroundStyle>
      <Content>
        {children}
      </Content>
    </BackgroundStyle>
  );
}

export default Background;
