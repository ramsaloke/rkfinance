import React from 'react';

interface NavMenuProps {
  children: React.ReactNode;
  className?: string;
}

interface NavMenuItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({ children, className = '' }) => {
  return (
    <nav className={`flex space-x-4 ${className}`}>
      {children}
    </nav>
  );
};

export const NavMenuItem: React.FC<NavMenuItemProps> = ({ 
  href, 
  children, 
  className = '',
  active = false
}) => {
  return (
    <a
      href={href}
      className={`
        px-3 
        py-2 
        text-sm 
        font-medium 
        rounded-md 
        transition-colors
        hover:bg-gray-100
        ${active 
          ? 'bg-gray-100 text-gray-900' 
          : 'text-gray-600 hover:text-gray-900'
        }
        ${className}
      `}
    >
      {children}
    </a>
  );
};
