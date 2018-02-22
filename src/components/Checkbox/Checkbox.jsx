import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './Checkbox.css';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  checked: false,
  disabled: false,
  label: undefined,
  name: undefined,
  onChange: undefined,
  value: undefined,
};

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.checked);
    }
  }

  render() {
    const {
      checked,
      disabled,
      name,
      value,
    } = this.props;

    return (
      <div className={styles.checkbox}>
        <input
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={this.handleChange}
          type="checkbox"
          value={value}
        />
        <span className={styles.checkmark} />
        <Label>{this.props.label}</Label>
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
