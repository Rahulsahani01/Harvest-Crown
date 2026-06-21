import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNavBar } from './TopNavBar';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar at the top */}
      <TopNavBar />
      
      {/* Content area */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};
