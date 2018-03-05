import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Select.css';

const propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: false,
  required: false,
  value: undefined,
};

const Select = (props) => {
  const {
    ...other
  } = props;

  return (
    <select
      {...other}
      className={styles.select}
    />
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
