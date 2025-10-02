import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`bg-white rounded-xl border shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`p-6 space-y-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <h3 className={`text-2xl font-semibold text-gray-900 ${className}`} {...props}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <p className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  );
};

export const CardContent: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`p-6 pt-0 flex items-center ${className}`} {...props}>
      {children}
    </div>
  );
};
