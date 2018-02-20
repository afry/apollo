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
          className={styles.datepicker}
          disabled={this.props.disabled}
          name={this.props.name}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          type="date"
          value={this.props.value}
        />
      </Label>
    );
  }
}

DatePicker.defaultProps = {
  disabled: false,
  label: undefined,
  name: undefined,
  onChange: undefined,
  placeholder: undefined,
  readOnly: false,
  value: undefined,
};

DatePicker.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
};
