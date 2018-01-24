import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './RadioButton.css';

export default class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { onChange } = this.props;
    if (onChange == null) { return; }
    onChange(ev.target.checked, this.props.value);
  }

  render() {
    return (
      <div>
        <Label>
          <input
            type="radio"
            className={styles.RadioButton}
            name={this.props.name}
            value={this.props.value}
            checked={this.props.checked}
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
            onChange={this.handleChange}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
          />
          {this.props.label}
          <div className={styles.Description}>{this.props.description}</div>
        </Label>
      </div>
    );
  }
}

RadioButton.defaultProps = {
  name: undefined,
  label: undefined,
  description: undefined,
  value: undefined,
  checked: false,
  disabled: false,
  readOnly: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
};

RadioButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

