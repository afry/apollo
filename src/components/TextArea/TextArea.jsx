import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './TextArea.css';

const propTypes = {
  className: PropTypes.string,
  columns: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
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
  className: undefined,
  columns: '39',
  disabled: false,
  id: undefined,
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

const TextArea = (props) => {
  const {
    className,
    columns,
    resize: Resize,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.textarea,
  );

  return (
    <textarea
      {...other}
      className={classes}
      cols={columns}
      style={{ resize: Resize }}
    />
  );
};

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
