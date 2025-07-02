import React from 'react';
import { Search, HelpCircle, Bell } from 'lucide-react';

const Header = () => (
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">DemoApp</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <HelpCircle className="w-5 h-5 text-gray-400" />
        <Bell className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  </header>
);

export default Header;
