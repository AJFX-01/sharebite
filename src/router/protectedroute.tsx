import { useUser } from 'context/userContext';
import { Navigate } from 'react-router-dom';
import paths from './path';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <Navigate to={paths.login} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
