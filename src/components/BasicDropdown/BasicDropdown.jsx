import React from 'react';
import Dropdown from '../Dropdown';

class BasicDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { open } = this.state;
    return (
      <Dropdown {...this.props} onToggle={this.handleToggle} open={open} />
    );
  }
}

export default BasicDropdown;
