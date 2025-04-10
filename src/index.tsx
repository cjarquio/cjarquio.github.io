import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PortfolioRouter from './components/PortfolioRouter/PortfolioRouter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioRouter />
    </BrowserRouter>
  </StrictMode>
);
