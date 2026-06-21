import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const TopNavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBecomeCustomer = () => {
    navigate('/contact');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-surface shadow-sm border-b border-outline-variant/30">
      <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="font-headline-sm text-headline-sm font-bold text-on-surface hover:opacity-90"
        >
          Crown Harvest
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center h-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-label-md text-label-md transition-colors h-full flex items-center border-b-2 ${
                  isActive
                    ? 'text-secondary font-bold border-secondary'
                    : 'text-on-surface-variant hover:text-secondary border-transparent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <button
            onClick={handleBecomeCustomer}
            className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-button text-button hover:scale-105 transition-transform active:scale-95 cursor-pointer"
          >
            Become a Customer
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-on-surface hover:text-secondary transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/30 px-margin-mobile py-6 flex flex-col gap-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-label-md text-label-md py-2 transition-colors border-l-4 pl-3 ${
                    isActive
                      ? 'text-secondary font-bold border-secondary bg-secondary/5'
                      : 'text-on-surface-variant hover:text-secondary border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleBecomeCustomer();
            }}
            className="w-full bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-button text-button hover:bg-secondary-fixed transition-colors active:scale-95 cursor-pointer"
          >
            Become a Customer
          </button>
        </div>
      )}
    </header>
  );
};
