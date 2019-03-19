import React from 'react';
import { Avatar, Container } from '../../src';

const AvatarExample = () => (
  <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
    <h1>Avatar</h1>
    <div>
      <h4>X-Small</h4>
      <Avatar initials="JW" size="x-small" src="" />
      <Avatar initials="EJF" name="Jon Wahlström" size="x-small" src="" />

      <Avatar name="Jon Wahlström" size="x-small" src="" />
      <Avatar
        name="Jon Wahlström"
        size="x-small"
        src="http://via.placeholder.com/400x400"
      />

      <h4>Small</h4>
      <Avatar name="Jon Wahlström" src="" />
      <Avatar name="Jon Wahlström" src="http://via.placeholder.com/400x400" />

      <h4>Medium</h4>
      <Avatar name="Jon Wahlström" size="medium" src="" />
      <Avatar
        name="Jon Wahlström"
        size="medium"
        src="http://via.placeholder.com/400x400"
      />

      <h4>Large</h4>
      <Avatar name="Jon Wahlström" size="large" src="" />
      <Avatar
        name="Jon Wahlström"
        size="large"
        src="http://via.placeholder.com/400x400"
      />

      <h4>X-Large</h4>
      <Avatar name="Jon Wahlström" size="x-large" src="" />
      <Avatar
        name="Jon Wahlström"
        size="x-large"
        src="http://via.placeholder.com/400x400"
      />
    </div>
  </Container>
);

export default AvatarExample;
