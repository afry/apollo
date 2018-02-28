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
    ...other
  } = props;

  return (
    <option
      {...other}
      className={styles['select-option']}
    >{children}
    </option>
  );
};

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;

export default SelectOption;
