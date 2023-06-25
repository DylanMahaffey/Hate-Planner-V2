import React, { FC } from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

interface NavProps {}

const Nav: FC<NavProps> = () => (
    <nav>
      <ul>
        <Link to="/"><li className="nav-item">Home</li></Link>
        <Link to="/calendar"><li className="nav-item">Calendar</li></Link>
      </ul>
    </nav>
);

export default Nav;
