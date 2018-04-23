import React from 'react';
import {
  BasicDropdown,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
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
    <Navbar dark>
      <Container>
        <NavbarBrand>one</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink disabled>Time Report</NavLink>
          </NavItem>
          <BasicDropdown>
            <DropdownToggle>Projects</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Menu Item</DropdownItem>
              <DropdownItem>Menu Item</DropdownItem>
              <DropdownItem>Menu Item</DropdownItem>
            </DropdownMenu>
          </BasicDropdown>
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
    <Navbar>
      <Container>
        <NavbarBrand>Home</NavbarBrand>
        <Nav horizontal="center" navbar>
          <BasicDropdown>
            <DropdownToggle disabled>Overview</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Hej</DropdownItem>
            </DropdownMenu>
          </BasicDropdown>
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
