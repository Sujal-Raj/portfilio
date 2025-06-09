import React from 'react';
import { X, Upload ,LogOut } from 'lucide-react';

interface sidebarValues{
  isOpen: boolean,
  toggleSidebar: () => void
}

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }:sidebarValues) => {
  const sidebarItems = [
    { icon: Upload, label: 'Add to gallery', href: '/dashboard', active: true },
    // { icon: Upload, label: 'Upload Gallery', href: '/upload' },
    // { icon: Image, label: 'Gallery Management', href: '/gallery' },
    // { icon: Settings, label: 'Settings', href: '/settings' },
    // { icon: LogOut, label: 'Logout', href: '/logout' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-black border-r border-yellow-400 transform transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 ">
          <h2 className="text-xl font-bold text-yellow-400">Admin Panel</h2>
          <button 
            onClick={toggleSidebar}
            className="lg:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 group ${
                  item.active 
                    ? 'bg-yellow-400 text-black font-medium' 
                    : 'text-yellow-100 hover:bg-yellow-400 hover:text-black hover:translate-x-2'
                }`}
              >
                <IconComponent size={20} className="mr-3" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-4 right-4">
          {/* <div className="bg-yellow-400 bg-opacity-10 border border-yellow-400 rounded-lg p-4">
            <p className="text-yellow-400 text-sm font-medium">Admin Dashboard</p>
            <p className="text-yellow-300 text-xs mt-1">Manage your gallery content</p>
          </div> */}

          <div className='text-yellow-100 hover:bg-yellow-400 hover:text-black hover:translate-x-2 flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 hover:cursor-pointer'>
                <LogOut size={20} className="mr-3" />
               Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;