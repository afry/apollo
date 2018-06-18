import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Breadcrumbs.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  children: undefined,
  className: undefined,
  tag: 'nav',
};

const Breadcrumb = (props) => {
  const {
    className,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.breadcrumbs,
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
