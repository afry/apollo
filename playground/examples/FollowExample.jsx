import React from 'react';
import {
  Container,
  Follow,
} from '../../src';

class FollowExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    const { active } = this.state;

    return (
      <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
        <h1>Follow</h1>
        <div>
          <Follow active={active} icon="https://picsum.photos/200/200/?image=1" onToggle={this.handleToggle}>Stockholm</Follow>
        </div>
      </Container>
    );
  }
}

export default FollowExample;

