import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './SelectOption.css';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  disabled: false,
  hidden: false,
  value: undefined,
};

const SelectOption = (props) => {
  const {
    className,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['select-option'],
  );

  return (
    <option {...other} className={classes} />
  );
};

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;

export default SelectOption;
