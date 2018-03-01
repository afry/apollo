import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './SelectOption.css';

const propTypes = {
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  hidden: false,
  value: undefined,
};

const SelectOption = (props) => {
  const {
    ...other
  } = props;

  return (
    <option
      {...other}
      className={styles['select-option']}
    />
  );
};

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;

export default SelectOption;
