import React from 'react';

/**
 * Wiederverwendbare Button-Komponente
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button-Inhalt
 * @param {string} props.variant - 'primary' | 'secondary' | 'danger' | 'success'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {boolean} props.fullWidth - Volle Breite
 * @param {boolean} props.disabled - Deaktiviert
 * @param {React.ReactNode} props.icon - Icon-Element
 * @param {string} props.className - Zusätzliche CSS-Klassen
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors flex items-center justify-center shadow hover:shadow-md';

  const variantClasses = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    secondary: 'bg-blue-500 text-white hover:bg-blue-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-teal-500 text-white hover:bg-teal-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 shadow-none'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const widthClasses = fullWidth ? 'w-full' : '';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    disabledClasses,
    widthClasses,
    className
  ].join(' ');

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {icon && <span className={children ? 'mr-2' : ''}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
