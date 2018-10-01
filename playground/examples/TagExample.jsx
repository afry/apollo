import React from 'react';
import {
  Container,
  Tag,
} from '../../src';

const TagExample = () => (
  <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
    <h1>Tag</h1>
    <div>
      <Tag>Stockholm</Tag>
      <Tag>Stockholm, Sweden</Tag>
      <Tag onClose={() => {}}>Stockholm, Sweden</Tag>
    </div>
  </Container>
);

export default TagExample;

