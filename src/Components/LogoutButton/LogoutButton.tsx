import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import "./logout-button.css"


interface LogoutButtonProps {}

let isLoggedIn = false;

const LogoutButton: FC<LogoutButtonProps> = () => (
  <div>
    {isLoggedIn ? 
      <div></div> : 
      <Link to="/login" className='login-button'>Login</Link>}
  </div>
);

export default LogoutButton;
