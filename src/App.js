import React from 'react';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import Form from './docs/day05/form/Form';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Form />
      </ThemeProvider>
    </>
  );
}

export default App;
