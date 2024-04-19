import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  /** Put your mantine theme override here */
});
root.render(
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);

