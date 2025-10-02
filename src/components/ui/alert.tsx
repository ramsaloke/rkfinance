import React from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  icon?: React.ReactNode;
}

type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const getVariantStyles = (variant: AlertProps['variant'] = 'info') => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };
  return styles[variant];
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className = '', variant = 'info', title, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={`relative w-full rounded-lg border p-4 text-sm ${getVariantStyles(variant)} ${className}`}
        {...props}
      >
        {icon && (
          <span className="absolute left-4 top-4">
            {icon}
          </span>
        )}
        <div className={icon ? 'pl-7' : ''}>
          {title && <AlertTitle>{title}</AlertTitle>}
          {children}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className = '', ...props }, ref) => (
    <h5
      ref={ref}
      className={`mb-1 font-medium leading-none tracking-tight ${className}`}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm [&_p]:leading-relaxed ${className}`}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
