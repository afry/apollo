import * as React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './InputField.css';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { onChange } = this.props;
    if (onChange == null) { return; }
    onChange(ev.target.value);
  }

  render() {
    return (
      <div>
        <Label>{this.props.label}</Label>
        <input
          autoComplete={this.props.autoComplete ? 'on' : 'off'}
          className={styles.inputfield}
          disabled={this.props.disabled}
          max={this.props.max}
          maxLength={this.props.maxLength}
          min={this.props.min}
          name={this.props.name}
          onBlur={this.props.onBlur}
          onChange={this.handleChange}
          onFocus={this.props.onFocus}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          required={this.props.required}
          type={this.props.type}
          value={this.props.value}
        />
      </div>
    );
  }
}

InputField.defaultProps = {
  autoComplete: false,
  disabled: false,
  label: undefined,
  max: undefined,
  maxLength: undefined,
  min: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  type: 'text',
  value: undefined,
};

InputField.propTypes = {
  autoComplete: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  max: PropTypes.string,
  maxLength: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type(props, propName) {
    const value = props[propName];
    if (!value.match(/^text|number|password|email|tel$/)) {
      return new Error(`Invalid type: ${value}`);
    }
    return null;
  },
  value: PropTypes.string,
};
