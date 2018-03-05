import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Checkbox.css';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  checked: false,
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  value: undefined,
};

const Checkbox = (props) => {
  const {
    ...other
  } = props;

  return (
    <div className={styles.checkbox}>
      <input
        {...other}
        type="checkbox"
      />
      <span className={styles.checkmark} />
    </div>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
