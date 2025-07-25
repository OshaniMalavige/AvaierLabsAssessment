import React from 'react';
import Header from './Header';

const LayoutWrapper = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <main className="p-6">{children}</main>
  </div>
);

export default LayoutWrapper;
