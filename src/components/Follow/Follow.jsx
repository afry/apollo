import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Follow.css';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string
  ]),
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  onToggle: PropTypes.func,
};

const defaultProps = {
  active: true,
  children: undefined,
  className: undefined,
  icon: undefined,
  onClick: undefined,
  onToggle: undefined,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick(e) {
    const { onClick } = this.props;
    if (!onClick) {
      return;
    }

    onClick(e);
  }

  handleToggle(e) {
    e.stopPropagation();

    const { onToggle } = this.props;
    if (!onToggle) {
      return;
    }
    onToggle(e);
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleClick(e);
    }
  }

  render() {
    const {
      active,
      children,
      className,
      icon,
      onClick,
      onToggle,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles.follow,
      active ? styles.active : 'undefined',
      onClick ? styles['follow-clickable'] : undefined,
    );

    return (
      <span
        {...other}
        className={classes}
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex={0}
      >
        {icon && <img alt="Error" className={styles['follow-icon']} src={icon} />}
        <span className={styles['follow-text']}>
          {children}
        </span>
        {onToggle && (
          <button
            area-label="Control"
            className={classNames(styles.close)}
            data-content={active ? '×' : '+'}
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
