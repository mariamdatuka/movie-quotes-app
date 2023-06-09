import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/fonts/HelveticaNeue Medium.ttf';
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.ts'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

<React.StrictMode>
   <I18nextProvider i18n={i18n}>
     <ThemeProvider theme={theme}>
       <App />
     </ThemeProvider>
  </I18nextProvider> 
</React.StrictMode>,
)
