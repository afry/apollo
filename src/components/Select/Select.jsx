import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Select.css';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  disabled: false,
  id: undefined,
  innerRef: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: false,
  required: false,
  value: undefined,
};

const Select = (props) => {
  const {
    className,
    innerRef,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.select,
  );

  return (
    <select {...other} ref={innerRef} className={classes} />
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
