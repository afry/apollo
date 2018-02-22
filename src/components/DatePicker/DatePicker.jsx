import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './DatePicker.css';

const propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  label: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: false,
  value: undefined,
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  render() {
    const {
      disabled,
      label,
      name,
      readOnly,
      value,
    } = this.props;

    return (
      <div className={styles.datepicker}>
        <Label>{label}</Label>
        <input
          disabled={disabled}
          name={name}
          onChange={this.handleChange}
          readOnly={readOnly}
          type="date"
          value={value}
        />
      </div>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
