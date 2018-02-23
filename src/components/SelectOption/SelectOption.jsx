import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './SelectOption.css';

const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  children: undefined,
  disabled: false,
  hidden: false,
  value: undefined,
};

const SelectOption = (props) => {
  const {
    children,
    disabled,
    hidden,
    value,
  } = props;

  return (
    <option
      className={styles['select-option']}
      disabled={disabled}
      hidden={hidden}
      value={value}
    >{children}
    </option>
  );
};

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;

export default SelectOption;
