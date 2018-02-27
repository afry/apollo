import React from 'react';
import {
  Button,
  Heading,
} from '../../src/index';

const ButtonExample = () => {
  const divStyle = {
    borderTop: '1px solid lightgray',
    margin: '10px 0',
    padding: '20px 10px',
    width: 'auto'
  };

  return (
    <div>
      <Heading h2>Button</Heading>
      <div style={divStyle}>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="danger">danger</Button>
      </div>
    </div>
  );
};

export default ButtonExample;
