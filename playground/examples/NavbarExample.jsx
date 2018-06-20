import React from 'react';
import {
  BasicDropdown,
  Container,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  Nav,
  NavItem,
  NavLink,
} from '../../src';

class NavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Container>
        <h1>Navbar</h1>
        <h3>Dark</h3>
        <Navbar dark expand="medium">
          <Container>
            <NavbarBrand>one</NavbarBrand>
            <NavbarToggle onClick={this.handleToggle} />
            <Collapse navbar open={this.state.open}>
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
            </Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarExample;
