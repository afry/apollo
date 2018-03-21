import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './DropdownItem.css';

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  header: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  separator: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  className: undefined,
  disabled: false,
  header: false,
  href: undefined,
  onClick: undefined,
  separator: false,
  tag: 'button',
};

class DropdownItem extends React.Component {
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
      active,
      className,
      header,
      href,
      separator,
      ...other
    } = this.props;

    let {
      tag: Tag
    } = this.props;

    const classes = classNames(
      className,
      (!header && !separator) ? styles['dropdown-item'] : '',
      header ? styles['dropdown-header'] : '',
      separator ? styles['dropdown-separator'] : '',
      active ? styles.active : '',
    );

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (separator) {
        Tag = 'div';
      } else if (href) {
        Tag = 'a';
      }
    }

    return (
      <Tag
        {...other}
        className={classes}
        href={href}
        onClick={this.handleClick}
      />
    );
  }
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
