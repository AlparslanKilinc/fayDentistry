import React from 'react';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import './styles/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <MenuBar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;