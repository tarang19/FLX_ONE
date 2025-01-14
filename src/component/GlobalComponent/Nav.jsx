import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import { Link } from 'react-router-dom';
import { ROUTES, ROLE_ACCESS } from '@/constant/rolesAndURLs'; // Make sure ROLES is imported

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Get the logged-in user from Redux

  // Define navigation links based on user role
  const navItems = user ? ROLE_ACCESS[user.role] : [];

  // Map routes to more user-friendly names
  const routeNames = {
    [ROUTES.ADMIN]: 'Admin',
    [ROUTES.EDITOR]: 'Editor',
    [ROUTES.VIEWER]: 'Viewer',
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout to clear user data from Redux
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FLEX_ONE
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {user ? (
            <>
              <span className="text-sm text-gray-500 dark:text-white">{user.role}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to={ROUTES.LOGIN}
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {navItems.length > 0 ? (
                navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item}
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      {routeNames[item] || item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <Link
                    to={ROUTES.LOGIN}
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
