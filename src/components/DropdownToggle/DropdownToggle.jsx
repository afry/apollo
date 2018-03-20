import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './DropdownToggle.css';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  disabled: false,
  onClick: undefined,
  tag: 'a',
};

const contextTypes = {
  onToggle: PropTypes.func,
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
    const {
      className,
      tag: Tag,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles['dropdown-toggle'],
    );

    return (
      <Tag {...other} className={classes} onClick={this.handleClick} />
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;

