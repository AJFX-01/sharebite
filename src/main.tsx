import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { theme } from 'theme/theme.ts';
import { RouterProvider } from 'react-router-dom';
import router from 'router/router.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import BreakpointsProvider from 'providers/useBreakpoints';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from 'context/userContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
        </QueryClientProvider>
      </BreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
