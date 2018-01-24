import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

import * as styles from './TextArea.css';

export default class TextArea extends React.Component {
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
      <Label>{this.props.label}
        <textarea
          className={styles.TextArea}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          rows={this.props.rows}
          cols={this.props.cols}
          disabled={this.props.disabled}
          required={this.props.required}
          readOnly={this.props.readOnly}
          onChange={this.handleChange}
        />
      </Label>
    );
  }
}

TextArea.defaultProps = {
  name: undefined,
  value: undefined,
  label: undefined,
  placeholder: undefined,
  maxLength: undefined,
  rows: '5',
  cols: '50',
  disabled: false,
  required: false,
  readOnly: false,
  onChange: undefined,
};

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};
