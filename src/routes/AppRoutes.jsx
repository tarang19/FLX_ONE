// AppRoutes.js
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '@/component/GlobalComponent/ProtectedRoute';
import { Login, Unauthorized, AdminPage, EditorPage, ViewerPage } from '@/component/GlobalComponent/LazyImports';
import { ROUTES } from '@/constant/rolesAndURLs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />

      {/* Protect routes based on user role */}
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.ADMIN} element={<AdminPage />} />
        <Route path={ROUTES.EDITOR} element={<EditorPage />} />
        <Route path={ROUTES.VIEWER} element={<ViewerPage />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
    </Routes>
  );
};

export default AppRoutes;
