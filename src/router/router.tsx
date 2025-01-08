import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import paths, { rootPaths } from './path';
import App from 'App';


/* ---------------- Lazy loads various components ------------------------- */
const SignupPage = lazy(() => import('pages/authentication/signup'));
const LoginPage = lazy(() => import('pages/authentication/login'));
/* -------------------------------------------------------------------------- */



export const routes = [
  {
    elements: (
      <Suspense fallback={}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: <Navigate to={paths.login} replace />
      },
    ]
  }
]