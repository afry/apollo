import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from '../../src';

const NavbarExample = () => {
  return (
    <div className="example">
      <h1>Navbar</h1>
      <div>
        <Navbar>
          <NavbarBrand>One</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink>Time Report</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Groups</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Information</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarExample;

