import React from 'react';
import {
  Container,
  Tag,
} from '../../src';

const TagExample = () => (
  <Container>
    <h1>Tag</h1>
    <div>
      <Tag>Stockholm</Tag>
      <Tag>Stockholm, Sweden</Tag>
      <Tag onRemove={() => {}}>Stockholm, Sweden</Tag>
    </div>
  </Container>
);

export default TagExample;

