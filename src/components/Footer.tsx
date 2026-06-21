import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Crown Harvest Logo.jpg';


export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-surface-container-low py-section-gap-desktop border-t border-secondary/20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">Crown Harvest</div>
          <p className="font-body-md text-on-surface-variant max-w-sm leading-relaxed">
            Elevating the standard of fresh produce through global expertise and local commitment. Sustainable, artisanal, and reliable since 1984.
          </p>
          {/* <div className="flex gap-4">
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:bg-secondary/10 transition-colors"
              aria-label="Share page"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-xl">share</span>
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:bg-secondary/10 transition-colors"
              aria-label="Global network"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-xl">public</span>
            </a>
          </div> */}
                  {/* Logo */}
        <img
          src={logoImg} // update path as needed
          alt="Crown Harvest Logo"
          className="h-16 w-auto"
        />
        </div>

        {/* Quick & Support Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-label-md text-secondary font-medium mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  Services
                </Link>
              </li>
               <li>
                <Link to="/contact" className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  Contact Info
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h4 className="font-label-md text-secondary font-medium mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  Contact Info
                </Link>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  Terms of Service
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-on-surface-variant hover:text-secondary underline transition-all font-body-md">
                  Wholesale Portal
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-6">
          <h4 className="font-label-md text-secondary font-medium uppercase tracking-wider">Market Updates</h4>
          <p className="font-body-md text-on-surface-variant">
            Stay informed about seasonal harvests and global market trends.
          </p>
          
          {isSubscribed ? (
            <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg text-secondary flex items-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span className="font-label-md text-sm">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-surface border border-outline-variant rounded-lg px-4 py-3 flex-grow focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-outline/50"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-on-secondary-fixed transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-outline-variant/20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <p className="font-label-md text-on-surface-variant opacity-70">
          © {new Date().getFullYear()} Crown Harvest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
