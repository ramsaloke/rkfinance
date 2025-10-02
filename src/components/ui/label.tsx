import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  error?: boolean;
  required?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', error, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`
          block 
          text-sm 
          font-medium 
          leading-none 
          peer-disabled:cursor-not-allowed 
          peer-disabled:opacity-70
          ${error ? 'text-red-500' : 'text-gray-700'}
          ${className}
        `}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';
