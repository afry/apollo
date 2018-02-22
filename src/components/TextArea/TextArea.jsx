import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './TextArea.css';

const propTypes = {
  columns: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  resize: PropTypes.string,
  rows: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  columns: '39',
  disabled: false,
  label: undefined,
  maxLength: undefined,
  name: undefined,
  onChange: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  resize: 'both',
  rows: '5',
  value: undefined,
};

class TextArea extends React.Component {
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
      columns,
      disabled,
      label,
      maxLength,
      name,
      placeholder,
      readOnly,
      required,
      rows,
      value,
    } = this.props;

    return (
      <div>
        <Label>{label}</Label>
        <textarea
          className={styles.textarea}
          cols={columns}
          disabled={disabled}
          maxLength={maxLength}
          name={name}
          onChange={this.handleChange}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={rows}
          style={{ resize: this.props.resize }}
          value={value}
        />
      </div>
    );
  }
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
