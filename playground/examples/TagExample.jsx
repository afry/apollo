import React from 'react';
import { Container, Tag } from '../../src';

class TagExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleToggle = this.handleToggle.bind(this);
  }

  // eslint-disable-next-line
  handleToggle() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { open } = this.state;

    return (
      <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
        <h1>Tag</h1>
        <div>
          <Tag icon="https://picsum.photos/200/200/?image=1">Stockholm</Tag>
          <Tag>Stockholm, Sweden</Tag>
          <Tag onToggle={this.handleToggle} open={open}>
            Stockholm, Sweden
          </Tag>
        </div>
      </Container>
    );
  }
}

export default TagExample;
