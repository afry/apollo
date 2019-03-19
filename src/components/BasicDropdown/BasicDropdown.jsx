import React from 'react';
import Dropdown from '../Dropdown';

class BasicDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <Dropdown
        {...this.props}
        onToggle={this.handleToggle}
        open={this.state.open}
      />
    );
  }
}

export default BasicDropdown;
