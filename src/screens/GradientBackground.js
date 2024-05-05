import React from 'react';
import styled from 'styled-components';

// Defina um componente estilizado para o gradiente de cores

const Gradient = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #DAC0A3; 
`;

function GradientBackground({ children }) {
  return (
    <Gradient>
      {children} 
    </Gradient>
  );
}

export default GradientBackground;
