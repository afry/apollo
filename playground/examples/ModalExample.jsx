import React from 'react';
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from '../../src';

class ModalExample extends React.Component {
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
        <h1>Modal</h1>
        <Button onClick={this.handleToggle}>Open Modal</Button>

        <Modal onToggle={this.handleToggle} open={this.state.open}>
          <ModalHeader>
            Add Members
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Accept</Button>
            <Button>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalExample;
