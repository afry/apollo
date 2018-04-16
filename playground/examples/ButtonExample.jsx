import React from 'react';
import {
  Button,
  Container,
} from '../../src';

const ButtonExample = () => (
  <Container>
    <h1>Button</h1>
    <div>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="danger">danger</Button>
      <Button color="link">link</Button>
    </div>
    <div>
      <h4>Large</h4>
      <Button color="primary" size="large">Large Button</Button>
      <Button color="secondary" size="large">Large Button</Button>
    </div>
    <div>
      <h4>Small</h4>
      <Button color="primary" size="small">Small Button</Button>
      <Button color="secondary" size="small">Small Button</Button>
    </div>
  </Container>
);

export default ButtonExample;
