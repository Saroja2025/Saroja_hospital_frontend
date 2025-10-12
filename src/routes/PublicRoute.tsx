import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PublicRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
