import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/fonts/HelveticaNeue Medium.ttf';
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.ts'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
  </React.StrictMode>,
)
