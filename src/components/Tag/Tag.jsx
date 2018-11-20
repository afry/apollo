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
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  className: undefined,
  color: 'secondary',
  icon: undefined,
  onClick: undefined,
  onClose: undefined,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick(e) {
    const { onClick } = this.props;
    if (!onClick) {
      return;
    }

    onClick(e);
  }

  handleClose(e) {
    e.stopPropagation();

    const { onClose } = this.props;
    if (!onClose) {
      return;
    }
    onClose(e);
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleClick(e);
    }
  }

  render() {
    const {
      children,
      className,
      color,
      icon,
      onClick,
      onClose,
    } = this.props;

    const classes = classNames(
      className,
      styles.tag,
      styles[`tag-${color}`],
      onClick ? styles['tag-button'] : undefined,
    );

    return (
      <span
        className={classes}
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex={0}
      >
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
        {onClose && (
          <button
            className={styles.close}
            onClick={this.handleClose}
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
