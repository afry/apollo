import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './DatePicker.css';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    if (this.props.onChange === null) { return; }
    this.props.onChange(ev.target.value);
  }

  render() {
    return (
      <div>
        {this.props.label}<br />
        <input
          className={styles.DatePicker}
          type="date"
          name={this.props.name}
          value={this.props.value}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

DatePicker.defaultProps = {
  name: undefined,
  label: undefined,
  value: undefined,
  disabled: false,
  readOnly: false,
  onChange: undefined,
};

DatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};
