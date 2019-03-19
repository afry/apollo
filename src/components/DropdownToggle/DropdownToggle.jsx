import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './DropdownToggle.css';

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  className: undefined,
  disabled: false,
  onClick: undefined,
  tag: 'a',
};

const contextTypes = {
  onToggle: PropTypes.func,
  open: PropTypes.bool,
};

class DropdownToggle extends React.Component {
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

    this.context.onToggle(e);
  }

  render() {
    const {active, className, disabled, tag: Tag, ...other} = this.props;

    const {open} = this.context;

    const classes = classNames(
      className,
      styles['dropdown-toggle'],
      active || open ? styles.active : '',
      disabled ? styles.disabled : '',
    );

    return (
      <Tag
        {...other}
        className={classes}
        disabled={disabled}
        onClick={this.handleClick}
      />
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;
