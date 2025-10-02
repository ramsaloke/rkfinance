import React from 'react';
import { Navigate } from 'react-router-dom';

export const Blogs: React.FC = () => {
  return <Navigate to="/blogs" replace />;
};
