const Button = ({ children, variant = "default", size = "default", disabled = false, onClick, className = "" }) => {
  const variants = {
    default: "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
    primary: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200",
    destructive: "bg-red-600 text-white border-red-600 hover:bg-red-700"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
      <button
          onClick={onClick}
          disabled={disabled}
          className={`inline-flex items-center justify-center rounded-md border font-medium transition-colors ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      >
        {children}
      </button>
  );
};

export default Button;