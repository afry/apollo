import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavbarToggle.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
};

const defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  onClick: undefined,
  tag: 'button',
  type: 'button',
};

class NavbarToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      children,
      className,
      disabled,
      tag: Tag,
      ...other
    } = this.props;

    let { type } = this.props;

    const classes = classNames(
      className,
      styles['navbar-toggle'],
      (disabled) ? styles.disabled : '',
    );

    if (Tag !== 'button') {
      type = undefined;
    }

    return (
      <Tag
        {...other}
        className={classes}
        disabled={disabled}
        onClick={this.handleClick}
        type={type}
      >
        {children || <span className={styles['navbar-toggle-icon']} />}
      </Tag>
    );
  }
}

NavbarToggle.propTypes = propTypes;
NavbarToggle.defaultProps = defaultProps;

export default NavbarToggle;
