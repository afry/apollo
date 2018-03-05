import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Button.css';

const propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type(props, propName) {
    const value = props[propName];
    if (!value.match(/^button|submit|reset$/)) {
      return new Error(`Invalid type: ${value}`);
    }
    return null;
  },
};

const defaultProps = {
  color: 'secondary',
  disabled: false,
  onClick: undefined,
  size: '',
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
    const {
      color,
      size,
      ...other
    } = this.props;

    const className = classNames(
      styles.button,
      styles[`button-${color}`],
      size ? styles[`button-${size}`] : ''
    );

    return (
      <button {...other} className={className} onClick={this.handleClick} />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
