import { StrictMode } from 'react'
import  ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react';
import { theme } from 'theme/theme.ts'
import { RouterProvider } from 'react-router-dom';
import router from 'router/router.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import BreakpointsProvider from 'providers/useBreakpoints';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </BreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
