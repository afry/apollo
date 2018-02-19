import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './Checkbox.css';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { onChange } = this.props;
    if (onChange == null) { return; }
    onChange(ev.target.checked);
  }

  render() {
    return (
      <div>
        <Label>
          <input
            checked={this.props.checked}
            className={styles.Checkbox}
            disabled={this.props.disabled}
            name={this.props.name}
            onBlur={this.props.onBlur}
            onChange={this.handleChange}
            onFocus={this.props.onFocus}
            type="checkbox"
            value={this.props.value}
          />
          {this.props.label}
          <div className={styles.Description}>{this.props.description}</div>
        </Label>
      </div>
    );
  }
}

Checkbox.defaultProps = {
  checked: false,
  description: undefined,
  disabled: false,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
};
