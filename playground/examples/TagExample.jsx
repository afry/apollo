import React from 'react';
import {
  Container,
  Tag,
} from '../../src';

class TagExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // eslint-disable-next-line
  handleClick() {
    console.log('Clicked tag');
  }

  // eslint-disable-next-line
  handleRemove() {
    console.log('Removed tag');
  }

  handleToggle() {
    console.log('Toggled cancel');
    this.setState({ active: !this.state.active });
  }

  render() {
    const { active } = this.state;

    return (
      <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
        <h1>Tag</h1>
        <div>
          <Tag icon="https://picsum.photos/200/200/?image=1" onClick={this.handleClick}>Stockholm</Tag>
          <Tag onClick={this.handleClick} onClose={this.handleRemove}>Stockholm, Sweden</Tag>
          <Tag active={active} onClose={this.handleToggle}>Stockholm, Sweden</Tag>
        </div>
      </Container>
    );
  }
}

export default TagExample;

