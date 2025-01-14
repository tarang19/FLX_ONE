// Role definitions
export const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
};

// URLs for each role
export const ROUTES = {
  ADMIN: '/admin',
  EDITOR: '/editor',
  VIEWER: '/viewer',
  UNAUTHORIZED: '/unauthorized',
  LOGIN: '/login',
};

// Permissions for each role
export const ABILITIES = {
  [ROLES.ADMIN]: ['manage', 'all'], // Admin can manage everything
  [ROLES.EDITOR]: ['read', 'users', 'update', 'users'], // Editor can read and update users
  [ROLES.VIEWER]: ['read', 'users'], // Viewer can only read users
};

// Allowed Routes for Each Role
export const ROLE_ACCESS = {
  admin: ['/admin', '/editor', '/viewer'],  // Admin can access everything
  editor: ['/editor', '/viewer'], // Editor can access only editor & viewer pages
  viewer: ['/viewer'], // Viewer can access only viewer pages
};

