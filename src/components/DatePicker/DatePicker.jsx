import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './DatePicker.css';

const propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  id: undefined,
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
      id,
      name,
      readOnly,
      value,
    } = this.props;

    return (
      <input
        className={styles.datepicker}
        disabled={disabled}
        id={id}
        name={name}
        onChange={this.handleChange}
        readOnly={readOnly}
        type="date"
        value={value}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
