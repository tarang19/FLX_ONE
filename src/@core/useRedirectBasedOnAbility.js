import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { defineUserAbility } from '../@core/ability';
import { ROUTES } from '../constant/rolesAndURLs'; // Import constants

const useRedirectBasedOnAbility = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      const ability = defineUserAbility(user.role); // Define ability based on user role

      // Redirect based on user ability
      if (ability.can('manage', 'all')) {
        navigate(ROUTES.ADMIN); // Admin route
      } else if (ability.can('read', 'users') && ability.can('update', 'users')) {
        navigate(ROUTES.EDITOR); // Editor route
      } else if (ability.can('read', 'users')) {
        navigate(ROUTES.VIEWER); // Viewer route
      } else {
        navigate(ROUTES.UNAUTHORIZED); // Unauthorized route
      }
    }
  }, [user, navigate]); // This effect runs whenever the user state changes
};

export default useRedirectBasedOnAbility;
