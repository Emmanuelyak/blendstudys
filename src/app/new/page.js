"use client"
import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  HelpCircle,
  ChevronDown,
  ChevronRight,
  BarChart2,
  FileText,
  Mail,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const menuItems = [
    { 
      title: 'Dashboard', 
      icon: <Home size={20} />, 
      path: '/' 
    },
    { 
      title: 'Analytics',
      icon: <BarChart2 size={20} />,
      path: '/analytics',
      submenu: [
        { title: 'Reports', path: '/analytics/reports' },
        { title: 'Statistics', path: '/analytics/statistics' },
        { title: 'Performance', path: '/analytics/performance' }
      ]
    },
    { 
      title: 'Team', 
      icon: <Users size={20} />, 
      path: '/team' 
    },
    { 
      title: 'Documents',
      icon: <FileText size={20} />,
      path: '/documents',
      submenu: [
        { title: 'Contracts', path: '/documents/contracts' },
        { title: 'Proposals', path: '/documents/proposals' },
        { title: 'Forms', path: '/documents/forms' }
      ]
    },
    { 
      title: 'Messages', 
      icon: <Mail size={20} />, 
      path: '/messages' 
    },
    { 
      title: 'Settings', 
      icon: <Settings size={20} />, 
      path: '/settings' 
    },
    { 
      title: 'Help', 
      icon: <HelpCircle size={20} />, 
      path: '/help' 
    }
  ];

  const toggleDropdown = (title) => {
    if (activeDropdown === title) {
      setActiveDropdown('');
    } else {
      setActiveDropdown(title);
    }
  };

  const MenuItem = ({ item }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive = activeDropdown === item.title;

    return (
      <div className="w-full">
        <div 
          onClick={() => hasSubmenu ? toggleDropdown(item.title) : null}
          className={`
            flex items-center p-2 cursor-pointer
            hover:bg-gray-100 rounded-lg
            transition-colors duration-200
            ${isActive ? 'bg-gray-100' : ''}
          `}
        >
          <div className="flex items-center flex-1">
            <span className="text-gray-600">{item.icon}</span>
            <span className={`ml-3 text-sm font-medium text-gray-900 ${isCollapsed ? 'hidden' : 'block'}`}>
              {item.title}
            </span>
          </div>
          {hasSubmenu && !isCollapsed && (
            <span className="ml-auto">
              {isActive ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          )}
        </div>
        
        {hasSubmenu && isActive && !isCollapsed && (
          <div className="ml-4 mt-1">
            {item.submenu.map((subItem, index) => (
              <div
                key={index}
                className="flex items-center p-2 cursor-pointer text-sm
                         hover:bg-gray-100 rounded-lg pl-8
                         text-gray-600 transition-colors duration-200"
              >
                {subItem.title}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`
      h-screen bg-white border-r border-gray-200
      transition-all duration-300 ease-in-out
      ${isCollapsed ? 'w-16' : 'w-64'}
    `}>
      {/* Logo/Header Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">L</span>
          </div>
          {!isCollapsed && (
            <span className="ml-3 font-semibold text-gray-900">Logo</span>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="p-2 space-y-1">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </nav>

      {/* Footer/User Section */}
      <div className="absolute bottom-0 w-full border-t border-gray-200">
        <div className="p-4 flex items-center justify-between">
          <div className={`flex items-center ${isCollapsed ? 'hidden' : ''}`}>
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;