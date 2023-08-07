import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #6bdfff;
    --primary-color-weak: #90DFFF;
    --primary-color-bold: #3DA5DB;
    
    --red-color: #E11E00;
  }

  body {
    margin: 0;

    height: 100vh;
  }
`;

export const ContainerModal = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(179, 179, 179, 0.3);
`;

export const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;
