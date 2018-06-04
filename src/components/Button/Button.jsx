import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Button.css';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

const defaultProps = {
  className: undefined,
  color: 'secondary',
  disabled: false,
  onClick: undefined,
  size: undefined,
  tag: 'button',
  type: 'button',
};

class Button extends React.Component {
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
    let {
      tag: Tag,
      type,
    } = this.props;

    const {
      className,
      color,
      size,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles.button,
      styles[`button-${color}`],
      size ? styles[`button-${size}`] : ''
    );

    if (other.href) {
      Tag = 'a';
    }

    if (Tag !== 'button') {
      type = undefined;
    }

    return (
      <Tag
        {...other}
        className={classes}
        onClick={this.handleClick}
        type={type}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
