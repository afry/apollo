import * as React from 'react';
import PropTypes from 'prop-types';

import * as styles from './InputField.css';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    if (this.props.onChange === null) { return; }
    this.props.onChange(this.props.id, ev.target.value);
  }

  render() {
    return (
      <div>
        {this.props.label}<br />
        <input
          className={styles.TextInput}
          id={this.props.id}
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          required={this.props.required}
          min={this.props.min}
          max={this.props.max}
          maxLength={this.props.maxLength}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          autoComplete={this.props.autoComplete ? 'on' : 'off'}
          onChange={this.handleChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
      </div>
    );
  }
}

InputField.defaultProps = {
  id: undefined,
  type: 'text',
  name: undefined,
  value: undefined,
  label: undefined,
  placeholder: undefined,
  required: false,
  min: undefined,
  max: undefined,
  maxLength: undefined,
  disabled: false,
  readOnly: false,
  autoComplete: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
};

InputField.propTypes = {
  id: PropTypes.string,
  type(props, propName) {
    const value = props[propName];
    if (!value.match(/^text|number|password|email|tel$/)) {
      return new Error(`Invalid type: ${value}`);
    }
    return null;
  },
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoComplete: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
