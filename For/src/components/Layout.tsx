import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      {/* Header */}
      <header className="bg-white dark:bg-primary-dark shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-light to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NN</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                NextNova
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 dark:text-accent-silver hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/drones"
                className="text-gray-700 dark:text-accent-silver hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              >
                Drones
              </Link>
              <Link
                to="/vr-glasses"
                className="text-gray-700 dark:text-accent-silver hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              >
                VR Glasses
              </Link>
              <Link
                to="/compare"
                className="text-gray-700 dark:text-accent-silver hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              >
                Compare
              </Link>
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-accent-silver hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;