import React from 'react';
import {
  Button,
  Heading,
} from '../../src/index';

const ButtonExample = () => {
  return (
    <div className="example">
      <Heading tag="h1">Button</Heading>
      <div>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="danger">danger</Button>
        <br />
        <div>
          <Heading tag="h3">Sizes</Heading>
          <Heading tag="h4">Large</Heading>
          <Button color="primary" size="large">Large Button</Button>
          <Button color="secondary" size="large">Large Button</Button>
        </div>
        <div>
          <Heading tag="h4">Small</Heading>
          <Button color="primary" size="small">Small Button</Button>
          <Button color="secondary" size="small">Small Button</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample;
