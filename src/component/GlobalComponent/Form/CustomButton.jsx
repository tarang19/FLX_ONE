import PropTypes from 'prop-types';

const Button = ({
  type = 'button', // Added 'type' prop
  className = '',
  variant = 'default', // default, pills, gradient, outline, etc.
  size = 'medium', // small, medium, large
  color = 'blue', // blue, red, green, etc.
  icon: Icon = null, // Optional icon component
  label = '',
  disabled = false,
  loading = false, // Show loading state
  onClick,
  ...props
}) => {
  const baseClasses = 'font-medium focus:outline-none focus:ring-4 text-sm px-5 py-2.5 me-2 mb-2 rounded-lg transition-all duration-300 ease-in-out';
  
  const variantClasses = {
    default: `bg-${color}-700 hover:bg-${color}-800 focus:ring-${color}-300 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`,
    pills: `bg-${color}-700 hover:bg-${color}-800 focus:ring-${color}-300 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800 rounded-full`,
    gradient: `bg-gradient-to-r from-${color}-500 to-${color}-700 hover:from-${color}-600 hover:to-${color}-800 focus:ring-${color}-300 dark:from-${color}-400 dark:to-${color}-600`,
    outline: `border-2 border-${color}-700 text-${color}-700 hover:bg-${color}-700 hover:text-white focus:ring-${color}-300 dark:border-${color}-600 dark:text-${color}-600 dark:hover:bg-${color}-600 dark:hover:text-white`,
    shadow: `bg-${color}-700 hover:bg-${color}-800 focus:ring-${color}-300 shadow-lg shadow-${color}-500/50 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`,
    social: `bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700`,
  };

  const sizeClasses = {
    small: 'text-xs px-4 py-2',
    medium: 'text-sm px-5 py-2.5',
    large: 'text-lg px-6 py-3',
  };

  // Disabled and loading state
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const loadingClasses = loading ? 'relative' : '';
  const loader = loading && <span className="absolute left-1/2 transform -translate-x-1/2 animate-spin">...</span>;

  return (
    <button
      type={type} // The 'type' prop here sets button type (either "button" or "submit")
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${loadingClasses} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && !Icon && loader}
      {Icon && !loading && <Icon className="mr-2" />}
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']), // Allow either 'button' or 'submit'
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'pills', 'gradient', 'outline', 'shadow', 'social']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
