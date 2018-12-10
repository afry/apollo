/* eslint-disable */
import React from 'react';

import {
  AvatarExample,
  BadgeExample,
  BreadcrumbsExample,
  ButtonExample,
  CardExample,
  DropdownExample,
  FormExample,
  JumbotronExample,
  MentionExample,
  ModalExample,
  NavbarExample,
  NavsExample,
  TagExample,
} from './examples';

import {
  Alert,
  Container
} from '../src';

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    console.log('before', this.state)
    this.setState({ open: false }, () => { console.log('after', this.state)});
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Alert />
          <Alert color="secondary" />
          <Alert open={this.state.open} color="danger" onToggle={this.handleToggle} />
          <Alert color="success" />
          <Alert color="warning" closeAfter={1000*5}>
            <b>ERROR</b> This is an example of the alert component!
          </Alert>
          <Alert color="info" />
        </Container>
        <FormExample />
      </React.Fragment>
    );
  }
}

export default Playground;
