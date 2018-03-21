/* eslint-disable react/jsx-no-literals */
import React from 'react';
import {
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '../../src';

class DropdownExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Container>
        <h1>Dropdown</h1>
        <Dropdown onToggle={this.handleToggle} open={this.state.open}>
          <DropdownToggle>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem separator />
            <DropdownItem>Menu Item</DropdownItem>
            <DropdownItem>Menu Item</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Container>
    );
  }
}

export default DropdownExample;
