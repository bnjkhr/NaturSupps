import React from 'react';

/**
 * Wiederverwendbare Card-Komponente
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card-Inhalt
 * @param {string} props.variant - 'default' | 'info' | 'success' | 'warning' | 'danger'
 * @param {string} props.className - Zusätzliche CSS-Klassen
 * @param {boolean} props.hover - Hover-Effekt aktivieren
 */
const Card = ({
  children,
  variant = 'default',
  className = '',
  hover = false,
  ...props
}) => {
  const baseClasses = 'rounded-xl p-6';

  const variantClasses = {
    default: 'bg-white shadow-xl',
    info: 'bg-blue-50 border border-blue-200',
    success: 'bg-green-50 border border-green-200',
    warning: 'bg-yellow-50 border-l-4 border-yellow-400',
    danger: 'bg-red-50 border border-red-200',
    muted: 'bg-gray-50 border border-gray-200'
  };

  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow cursor-pointer' : '';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    hoverClasses,
    className
  ].join(' ');

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Card-Header Subkomponente
 */
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`border-b pb-3 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Card-Title Subkomponente
 */
Card.Title = ({ children, className = '', icon, ...props }) => (
  <h3 className={`text-2xl font-semibold text-gray-800 flex items-center ${className}`} {...props}>
    {icon && <span className="mr-3">{icon}</span>}
    {children}
  </h3>
);

/**
 * Card-Content Subkomponente
 */
Card.Content = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

/**
 * Card-Footer Subkomponente
 */
Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`border-t pt-4 mt-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
