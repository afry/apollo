import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Tag.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  icon: PropTypes.string,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  className: undefined,
  color: 'secondary',
  icon: undefined,
  onToggle: undefined,
  open: true,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    const { onToggle } = this.props;
    if (!onToggle) {
      return;
    }
    onToggle(e);
  }

  render() {
    const {
      children,
      className,
      color,
      icon,
      onToggle,
      open,
      ...other
    } = this.props;

    if (!open) {
      return null;
    }

    const classes = classNames(
      className,
      styles.tag,
      styles[`tag-${color}`],
    );

    return (
      <span {...other} className={classes}>
        {icon && (
          <img
            alt=""
            className={styles['tag-icon']}
            src={icon}
          />
        )}
        <span className={styles['tag-text']}>
          {children}
        </span>
        {onToggle && (
          <button
            className={styles.close}
            onClick={this.handleToggle}
            type="button"
          />
        )}
      </span>
    );
  }
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
