import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Heading.css';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'h2',
};

const Heading = (props) => {
  const {
    tag: Tag,
    ...other
  } = props;

  return (
    <Tag {...other} className={styles.Heading} />
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
