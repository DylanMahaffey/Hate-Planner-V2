import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import './layout.css';
import LogoutButton from '../../Components/LogoutButton/LogoutButton';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
   <div className="App">
      <header className="App-header">
        <Nav />
        <h1 className='nav-title'>Hate Planner</h1>
        <LogoutButton />
      </header>
      <div className='site-container'>
        <Outlet />
      </div>
    </div>
);

export default Layout;
