/* eslint-disable */
import React from 'react';

import {
  AvatarExample,
  BadgeExample,
  BreadcrumbsExample,
  ButtonExample,
  CardExample,
  DropdownExample,
  FollowExample,
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
        <ButtonExample />
      </React.Fragment>
    );
  }
}

export default Playground;
