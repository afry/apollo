import React from 'react';
import { Container, Mention } from '../../src';

const MentionExample = () => (
  <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
    <h1>Mention</h1>
    <div>
      <Mention>Stockholm, Sweden</Mention>
    </div>
  </Container>
);

export default MentionExample;
