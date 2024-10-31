import React from 'react';
import NavTabs from './NavTabs';

const Header: React.FC = () => (
  <header className="header">
    <div className="header-left">
      <h1>Victoria Mata</h1>
    </div>
    <NavTabs />
  </header>
);

export default Header;
