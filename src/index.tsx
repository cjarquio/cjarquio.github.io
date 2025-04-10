import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PortfolioRouter from './components/PortfolioRouter/PortfolioRouter';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <PortfolioRouter />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
