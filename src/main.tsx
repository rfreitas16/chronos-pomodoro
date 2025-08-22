import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Heading />
    <App></App>
  </StrictMode>,
);
