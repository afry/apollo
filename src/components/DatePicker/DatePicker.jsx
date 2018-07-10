import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './DatePicker.css';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  disabled: false,
  id: undefined,
  innerRef: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: false,
  value: undefined,
};

const DatePicker = (props) => {
  const {
    className,
    innerRef,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['date-picker'],
  );

  return (
    <input
      {...other}
      ref={innerRef}
      className={classes}
      placeholder="YYYY-MM-DD"
      type="date"
    />
  );
};

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
