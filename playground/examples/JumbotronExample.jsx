import React from 'react';
import { Container, Badge, Jumbotron } from '../../src';

const JumbotronExample = () => (
  <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
    <h1>Jumbotron</h1>
    <Jumbotron>
      <Badge>PROJECT</Badge>
      <h1>Concept ONE 2018</h1>
      <h3>
        {' '}
        Reshaping the ONE portal and aligning it with the ideas behind the new
        ÅF strategy "Making Future".
      </h3>
    </Jumbotron>
  </Container>
);

export default JumbotronExample;
