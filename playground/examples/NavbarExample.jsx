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
      <div>
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

        <h3>Light</h3>
        <Navbar expand="medium">
          <Container>
            <NavbarBrand>one</NavbarBrand>
            <NavbarToggle />
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

        <h3>Expand Small</h3>
        <Navbar expand="small">
          <Container>
            <NavbarBrand>one</NavbarBrand>
            <NavbarToggle />
            <Collapse navbar open={false}>
              <Nav navbar align="right">
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

        <h3>Expand Medium</h3>
        <Navbar expand="medium">
          <Container>
            <NavbarBrand>one</NavbarBrand>
            <NavbarToggle />
            <Collapse navbar open={false}>
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

        <h3>Expand Large</h3>
        <Navbar expand="large">
          <Container>
            <NavbarBrand>one</NavbarBrand>
            <NavbarToggle />
            <Collapse navbar open={false}>
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

        <h3>Expand X-Large</h3>
        <Navbar expand="x-large">
          <Container>
            <NavbarBrand>one</NavbarBrand>
            <NavbarToggle />
            <Collapse navbar open={false}>
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
      </div>
    );
  }
}

export default NavbarExample;
