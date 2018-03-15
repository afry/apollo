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

      <h3>Dark</h3>
      <Navbar>
        <NavbarBrand>one</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink disabled>Time Report</NavLink>
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

      <h3>Light</h3>
      <Navbar inverse>
        <NavbarBrand>Home</NavbarBrand>
        <Nav horizontal="center" navbar>
          <NavItem>
            <NavLink active>Overview</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>CEO Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Jobs & Assignments</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarExample;
