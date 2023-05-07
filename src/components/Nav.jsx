import NavItem from './NavItem';
import React from "react"
import './Nav.scss';

const Nav = ({ title, items }) => {
  return (
    <nav className="Nav">
      <p>{title}</p>
      <ul>
        {items.map((item, i) => (
          <NavItem key={i} name={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
