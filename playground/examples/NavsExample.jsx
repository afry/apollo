import React from 'react';
import {
  BasicDropdown,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
} from '../../src';

class NavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  render() {
    return (
      <Container>
        <h1>Navs</h1>
        <h3>Horizontal</h3>
        <h4>Left-aligned</h4>
        <Nav>
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <BasicDropdown>
              <DropdownToggle>Projects</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Menu Item</DropdownItem>
                <DropdownItem>Menu Item</DropdownItem>
                <DropdownItem>Menu Item</DropdownItem>
              </DropdownMenu>
            </BasicDropdown>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>

        <h4>Centered</h4>
        <Nav horizontal="center">
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>

        <h4>Right-aligned</h4>
        <Nav horizontal="right">
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>

        <h4>Justified</h4>
        <Nav justified>
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>

        <h3>Vertical</h3>
        <Nav vertical>
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>

        <h3>Tree menu</h3>
        <Nav vertical>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={!this.state.collapsed} onClick={() => { this.setState(prevState => ({ collapsed: !prevState.collapsed })); }}>
              Toggle
            </NavLink>
            <Nav collapsed={this.state.collapsed} vertical>
              <NavItem>
                <NavLink>Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Link</NavLink>
              </NavItem>
            </Nav>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>

        <h3>Side menu</h3>
        <Nav tabs vertical>
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>

        <h3>Tabs</h3>
        <Nav tabs>
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>

        <h4>Justified</h4>
        <Nav justified tabs>
          <NavItem>
            <NavLink active>Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Link</NavLink>
          </NavItem>
        </Nav>
      </Container>
    );
  }
}

export default NavbarExample;

