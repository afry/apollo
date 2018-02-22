import * as React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './InputField.css';

const propTypes = {
  autoComplete: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  max: PropTypes.string,
  maxLength: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
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

const defaultProps = {
  autoComplete: false,
  disabled: false,
  label: undefined,
  max: undefined,
  maxLength: undefined,
  min: undefined,
  name: undefined,
  onChange: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  type: 'text',
  value: undefined,
};

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  render() {
    const {
      autoComplete,
      disabled,
      label,
      max,
      maxLength,
      min,
      name,
      placeholder,
      readOnly,
      required,
      value,
      type,
    } = this.props;

    return (
      <div className={styles.inputfield}>
        <Label>{label}</Label>
        <input
          autoComplete={autoComplete ? 'on' : 'off'}
          disabled={disabled}
          max={max}
          maxLength={maxLength}
          min={min}
          name={name}
          onChange={this.handleChange}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          type={type}
          value={value}
        />
      </div>
    );
  }
}

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

export default InputField;
