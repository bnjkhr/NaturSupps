import React from 'react';

/**
 * Wiederverwendbare Input-Komponente
 * @param {Object} props
 * @param {string} props.label - Label-Text
 * @param {string} props.error - Fehlertext
 * @param {string} props.hint - Hilfstext
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {boolean} props.fullWidth - Volle Breite
 * @param {string} props.className - Zusätzliche CSS-Klassen
 */
const Input = React.forwardRef(({
  label,
  error,
  hint,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow hover:shadow-sm';

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
  };

  const errorClasses = error
    ? 'border-red-300 focus:ring-red-500'
    : '';

  const widthClasses = fullWidth ? 'w-full' : '';

  const combinedClasses = [
    baseClasses,
    sizeClasses[size] || sizeClasses.md,
    errorClasses,
    widthClasses,
    className
  ].join(' ');

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={combinedClasses}
        {...props}
      />
      {hint && !error && (
        <p className="mt-1 text-sm text-gray-500">{hint}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
