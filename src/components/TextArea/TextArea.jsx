import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './TextArea.css';

export default class TextArea extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.label}<br />
        <textarea
          className={styles.TextArea}
          name={this.props.name}
          value={this.props.value}
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          rows={this.props.rows}
          cols={this.props.cols}
          disabled={this.props.disabled}
          required={this.props.required}
          readOnly={this.props.readOnly}
        />
      </div>
    );
  }
}

TextArea.defaultProps = {
  name: undefined,
  value: undefined,
  defaultValue: undefined,
  label: undefined,
  placeholder: undefined,
  maxLength: undefined,
  rows: undefined,
  cols: undefined,
  disabled: false,
  required: false,
  readOnly: false,
};

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
};
