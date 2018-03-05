import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './TextArea.css';

const propTypes = {
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
    columns,
    resize: Resize,
    ...other
  } = props;

  return (
    <textarea
      {...other}
      className={styles.textarea}
      cols={columns}
      style={{ resize: Resize }}
    />
  );
};

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
