import React from 'react';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className = '', 
    value = 0, 
    max = 100, 
    variant = 'default',
    size = 'md',
    ...props 
  }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    
    const variantStyles = {
      default: 'bg-blue-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600'
    };

    const sizeStyles = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={`
          relative 
          w-full 
          overflow-hidden 
          rounded-full 
          bg-gray-200
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        <div
          className={`
            absolute
            top-0
            left-0
            h-full
            transition-all
            duration-300
            ease-out
            ${variantStyles[variant]}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';
