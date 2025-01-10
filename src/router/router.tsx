import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import paths, { rootPaths } from './path';

/* ---------------- Lazy loads various components ------------------------- */
const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Dashboard = lazy(() => import('pages/dashboard'))

const SignupPage = lazy(() => import('pages/authentication/signup'));
const LoginPage = lazy(() => import('pages/authentication/login'));

const Spinner = lazy(() => import('components/loading/Spinner'));
const LoadingProgress = lazy(
  () => import('components/loading/LoadingProgress'),
);

const NotFoundPage = lazy(() => import('pages/not-found'));
/* -------------------------------------------------------------------------- */

export const routes = [
  {
    elements: (
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: <Navigate to={paths.login} replace />,
      },
      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.login,
            element: <LoginPage />,
          },
          {
            path: paths.signup,
            element: <SignupPage />,
          },
        ],
      },
      {
        paths: rootPaths.pageRoots,
        element: <MainLayout />,
        children: [
          {
            path: paths.dashboard,
            element: (
              <Suspense fallback={<LoadingProgress />}>
                <Dashboard />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: rootPaths.errorRoot,
        children: [
          {
            path: paths.notfound,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={paths.notfound} replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: '/',
});

export default router;
