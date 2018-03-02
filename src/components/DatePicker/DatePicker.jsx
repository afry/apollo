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
      ...other
    } = this.props;

    return (
      <input
        {...other}
        className={styles['date-picker']}
        onChange={this.handleChange}
        type="date"
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
