import React from 'react';
import {
  Button,
  ButtonGroup,
  Container,
} from '../../src';

const ButtonExample = () => (
  <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
    <h1>Button</h1>
    <ButtonGroup>
      <Button color="primary">primary</Button>
      <Button disabled color="primary">disabled</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="danger">danger</Button>
      <Button color="link">link</Button>
      <Button tag="a">anchor</Button>
    </ButtonGroup>

    <h4>Large</h4>
    <ButtonGroup segmented>
      <Button color="primary" size="large">Large Button</Button>
      <Button color="secondary" size="large">Large Button</Button>
      <Button href="https://google.com" size="large">Google link</Button>
    </ButtonGroup>

    <h4>Small</h4>
    <ButtonGroup>
      <Button color="primary" size="small">Small Button</Button>
      <Button color="secondary" size="small">Small Button</Button>
    </ButtonGroup>
  </Container>
);

export default ButtonExample;
