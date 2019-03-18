import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Mention.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]),
};

const defaultProps = {
  children: undefined,
};

const Mention = props => {
  const classes = classNames(styles.mention);
  return <span className={classes} {...props} />;
};

Mention.propTypes = propTypes;
Mention.defaultProps = defaultProps;

export default Mention;
