import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import paths, { rootPaths } from './path';
import App from 'App';


/* ---------------- Lazy loads various components ------------------------- */
const SignupPage = lazy(() => import('pages/authentication/signup'));
const LoginPage = lazy(() => import('pages/authentication/login'));


const Spinner = lazy(() => import('components/loading/Spinner'));
const LoadingProgress = lazy(() => import('components/loading/LoadingProgress'));
/* -------------------------------------------------------------------------- */



export const routes = [
  {
    elements: (
      <Suspense fallback={<Spinner/>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: <Navigate to={paths.login} replace />
      },
      {
        path: rootPaths.authRoot,
        element:,
        children: [
          {
            path: paths.login,
            element: <LoginPage />
          },
          {
            path: paths.signup,
            element: <SignupPage />
          }
        ]
      }
    ]
  }
];


const router = createBrowserRouter(routes, {
  basename: '/',
});

export default router;
