import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, error, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="flex items-center">
        <div className="relative">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            className={`
              peer
              h-4 
              w-4 
              rounded 
              border-2 
              border-gray-300 
              text-blue-600
              focus:ring-blue-500
              ${error ? 'border-red-500' : 'border-gray-300'}
              ${className}
            `}
            {...props}
          />
          <Check
            className={`
              absolute
              top-0
              left-0
              h-4
              w-4
              text-white
              pointer-events-none
              opacity-0
              peer-checked:opacity-100
              peer-checked:text-current
              transition-opacity
            `}
          />
        </div>
        {label && (
          <label
            htmlFor={id}
            className={`
              ml-2
              text-sm
              font-medium
              ${error ? 'text-red-500' : 'text-gray-700'}
            `}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
