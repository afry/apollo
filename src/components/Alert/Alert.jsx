import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Alert.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'warning',
    'info',
  ]),
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  children: undefined,
  className: undefined,
  color: 'primary',
  onToggle: undefined,
  open: true,
  tag: 'div',
};

const Alert = ({
  children,
  className,
  color,
  onToggle,
  open,
  tag: Tag,
  ...other
}) => {
  const handleToggle = e => {
    if (!onToggle) {
      e.preventDefault();
      return;
    }

    onToggle(e);
  };

  if (!open) {
    return null;
  }

  const classes = classNames(className, styles.alert, styles[`alert-${color}`]);

  if (onToggle) {
    return (
      <Tag {...other} className={classes}>
        <div className={styles['alert-icon']} />
        <div className={styles['alert-body']}>
          <span>{children}</span>
        </div>
        <button
          area-label="Close"
          className={styles.close}
          onClick={handleToggle}
          type="button"
        />
      </Tag>
    );
  }

  return (
    <Tag {...other} className={classes}>
      <div className={styles['alert-icon']} />
      <div className={styles['alert-body']}>
        <span>{children}</span>
      </div>
    </Tag>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
