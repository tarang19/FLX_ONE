import LazyLoader from './LazyLoader';

// Lazy load all pages
export const Login = LazyLoader(() => import('@/pages/Login'), 'Login');
export const Unauthorized = LazyLoader(() => import('@/pages/Unauthorized'), 'Unauthorized');
export const AdminPage = LazyLoader(() => import('@/pages/AdminPage'), 'AdminPage');
export const EditorPage = LazyLoader(() => import('@/pages/EditorPage'), 'EditorPage');
export const ViewerPage = LazyLoader(() => import('@/pages/Viewer'), 'Viewer');
