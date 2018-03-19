import React from 'react';
import {
  Avatar,
  Container,
} from '../../src';

const AvatarExample = () => (
  <Container>
    <h1>Avatar</h1>
    <div>
      <h3>Extra small</h3>
      <Avatar alt="AC" size="x-small" src="" />
      <Avatar alt="AC" size="x-small" src="http://via.placeholder.com/400x400" />

      <h3>Small</h3>
      <Avatar alt="AC" src="" />
      <Avatar alt="AC" src="http://via.placeholder.com/400x400" />

      <h3>Medium</h3>
      <Avatar alt="AC" size="medium" src="" />
      <Avatar alt="AC" size="medium" src="http://via.placeholder.com/400x400" />

      <h3>Large</h3>
      <Avatar alt="AC" size="large" src="" />
      <Avatar alt="AC" size="large" src="http://via.placeholder.com/400x400" />
    </div>
  </Container>
);

export default AvatarExample;

