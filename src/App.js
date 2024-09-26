import React from 'react';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import ParentContainer from './docs/day04/context/normal/ParentContainer';
import AnimalsContainer from './docs/day04/context/expert/AnimalsContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimalsContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
