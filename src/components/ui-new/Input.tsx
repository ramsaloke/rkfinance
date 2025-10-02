import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  className = '',
  error = false,
  icon,
  ...props
}) => {
  const baseStyles = 'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50';
  
  const errorStyles = error ? 'border-red-500' : 'border-gray-200';
  const iconPadding = icon ? 'pl-10' : '';
  const classes = `${baseStyles} ${errorStyles} ${iconPadding} ${className}`;

  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input className={classes} {...props} />
    </div>
  );
};
