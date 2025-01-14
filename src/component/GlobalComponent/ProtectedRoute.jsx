import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROLE_ACCESS, ROUTES } from '@/constant/rolesAndURLs';

const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  // Get allowed routes for the user role
  const allowedRoutes = ROLE_ACCESS[user.role] || [];

  // Check if the current path is allowed
  const isAllowed = allowedRoutes.includes(location.pathname);

  // If the user tries to access a restricted route, redirect to unauthorized
  if (!isAllowed) {
    return <Navigate to={ROUTES.UNAUTHORIZED} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
