import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './DatePicker.css';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { onChange } = this.props;
    if (onChange === null) { return; }
    onChange(ev.target.value);
  }

  render() {
    return (
      <Label>{this.props.label}
        <input
          className={styles.DatePicker}
          type="date"
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          onChange={this.handleChange}
        />
      </Label>
    );
  }
}

DatePicker.defaultProps = {
  name: undefined,
  label: undefined,
  value: undefined,
  placeholder: undefined,
  disabled: false,
  readOnly: false,
  onChange: undefined,
};

DatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};
