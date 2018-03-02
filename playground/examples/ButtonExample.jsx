import React from 'react';
import {
  Button,
} from '../../src';

const ButtonExample = () => {
  return (
    <div className="example">
      <h1>Button</h1>
      <div>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="danger">danger</Button>
        <br />
        <div>
          <h3>Sizes</h3>
          <h4>Large</h4>
          <Button color="primary" size="large">Large Button</Button>
          <Button color="secondary" size="large">Large Button</Button>
        </div>
        <div>
          <h4>Small</h4>
          <Button color="primary" size="small">Small Button</Button>
          <Button color="secondary" size="small">Small Button</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample;
