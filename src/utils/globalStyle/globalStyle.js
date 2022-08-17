import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
    padding: 0 !important;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.contrast};
  }
  body::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.highlight};
  }
  
`;

export default GlobalStyle;
