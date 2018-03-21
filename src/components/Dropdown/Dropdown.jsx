import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Dropdown.css';

const propTypes = {
  className: PropTypes.string,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  onToggle: undefined,
  open: false,
  tag: 'div',
};

const childContextTypes = {
  onToggle: PropTypes.func,
  open: PropTypes.bool,
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getChildContext() {
    return {
      onToggle: this.props.onToggle,
      open: this.props.open,
    };
  }

  handleToggle(e) {
    if (this.props.onToggle) {
      this.props.onToggle(e);
    }
  }

  render() {
    const {
      className,
      tag: Tag,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles.dropdown,
    );

    return (
      <Tag {...other} className={classes} />
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Dropdown.childContextTypes = childContextTypes;

export default Dropdown;
