import { Route,Routes } from 'react-router-dom';
import { Login, Unauthorized } from '@/LazyImports';  // Import Lazy-loaded pages
import { ROUTES } from '@/constant/rolesAndURLs';  // URL constants

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />
    </Routes>
  );
};

export default PublicRoutes;
