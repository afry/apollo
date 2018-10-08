import React from 'react';
import {
  Badge,
  Container,
} from '../../src';

const BadgeExample = () => (
  <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
    <h1>Badge</h1>
    <div>
      <Badge color="primary">PROJECT</Badge>
      <Badge color="secondary">GROUP</Badge>
    </div>
  </Container>
);

export default BadgeExample;
