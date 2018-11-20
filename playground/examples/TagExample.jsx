import React from 'react';
import {
  Container,
  Tag,
} from '../../src';

class TagExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // eslint-disable-next-line
  handleClick() {
  }

  // eslint-disable-next-line
  handleRemove() {
  }

  render() {
    return (
      <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
        <h1>Tag</h1>
        <div>
          <Tag icon="https://picsum.photos/200/200/?image=1" onClick={this.handleClick}>Stockholm</Tag>
          <Tag onClick={this.handleClick} onClose={this.handleRemove}>Stockholm, Sweden</Tag>
          <Tag onClose={this.handleToggle}>Stockholm, Sweden</Tag>
        </div>
      </Container>
    );
  }
}

export default TagExample;

