import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Oila Khuyitroen</div>
      <ul className="links">
        <li className="link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `active` : undefined)}
            end
          >
            Oila List
          </NavLink>
        </li>
        <li className="link">
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? `active` : undefined)}
            end
          >
            Oila Add
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
