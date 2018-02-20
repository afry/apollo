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
      <div>
        <Label>{this.props.label}</Label>
        <textarea
          className={styles.textarea}
          cols={this.props.cols}
          disabled={this.props.disabled}
          maxLength={this.props.maxLength}
          name={this.props.name}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          required={this.props.required}
          rows={this.props.rows}
          value={this.props.value}
        />
      </div>
    );
  }
}

TextArea.defaultProps = {
  cols: '39',
  disabled: false,
  label: undefined,
  maxLength: undefined,
  name: undefined,
  onChange: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  rows: '5',
  value: undefined,
};

TextArea.propTypes = {
  cols: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.string,
  value: PropTypes.string,
};
