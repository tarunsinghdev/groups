import React from 'react';
import { Link } from 'react-router-dom';
import './Navlink.css';

const NavLink = () => {
  return (
    <div className="navlink">
      <nav className="navlink__items">
        <Link className="item1" to="/">
          Home
        </Link>
        <Link className="item2" to="/usergroup">
          Visit Group
        </Link>
      </nav>
    </div>
  );
};

export default NavLink;
