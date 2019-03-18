import React from 'react';
import Follow from '../Follow';

class UncontrolledFollow extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {active: false};
  }

  handleToggle() {
    this.setState(prevState => ({active: !prevState.active}));
  }

  render() {
    const {active} = this.state;

    return (
      <Follow {...this.props} active={active} onToggle={this.handleToggle} />
    );
  }
}

export default UncontrolledFollow;
