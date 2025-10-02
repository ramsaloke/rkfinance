import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-blue-100 text-blue-800 border-blue-200',
      secondary: 'bg-gray-100 text-gray-800 border-gray-200',
      success: 'bg-green-100 text-green-800 border-green-200',
      warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      error: 'bg-red-100 text-red-800 border-red-200',
      outline: 'bg-transparent border-gray-300 text-gray-800'
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base'
    };

    return (
      <div
        ref={ref}
        className={`
          inline-flex
          items-center
          rounded-md
          border
          font-medium
          transition-colors
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
