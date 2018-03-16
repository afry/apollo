import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from '../../src';

const NavbarExample = () => (
  <Container>
    <h1>Navbar</h1>
    <h3>Dark</h3>
    <Navbar>
      <Container>
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
      </Container>
    </Navbar>

    <h3>Light</h3>
    <Navbar inverse>
      <Container>
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
      </Container>
    </Navbar>
  </Container>
);

export default NavbarExample;
