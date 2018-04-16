/* eslint-disable react/jsx-no-literals */
import React from 'react';
import {
  Container,
  BasicDropdown,
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
    const isOpen = !this.state.open;
    this.setState({ open: isOpen });
  }

  render() {
    return (
      <Container>
        <h1>Dropdown</h1>
        <Dropdown onToggle={this.handleToggle} open={this.state.open}>
          <DropdownToggle>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Menu Item</DropdownItem>
            <DropdownItem>Menu Item</DropdownItem>
            <DropdownItem separator />
            <DropdownItem disabled>Disabled</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <BasicDropdown>
          <DropdownToggle>Basic Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Menu Item</DropdownItem>
            <DropdownItem>Menu Item</DropdownItem>
            <DropdownItem separator />
            <DropdownItem disabled>Disabled</DropdownItem>
          </DropdownMenu>
        </BasicDropdown>
      </Container>
    );
  }
}

export default DropdownExample;
