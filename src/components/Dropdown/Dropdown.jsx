import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Dropdown.css';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  disabled: false,
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
    this.handleDocumentClick = this.handleDocumentClick.bind(this);

    this.addEventListeners = this.addEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
  }

  getChildContext() {
    return {
      onToggle: this.props.onToggle,
      open: this.props.open,
    };
  }

  componentDidMount() {
    if (this.props.open) {
      this.addEventListeners();
    } else {
      this.removeEventListeners();
    }
  }

  componentDidUpdate(previousProps) {
    if (this.props.open !== previousProps.open) {
      if (this.props.open) {
        this.addEventListeners();
      } else {
        this.removeEventListeners();
      }
    }
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  addEventListeners() {
    ['click'].forEach(event => (
      document.addEventListener(event, this.handleDocumentClick, true)
    ));
  }

  removeEventListeners() {
    ['click'].forEach(event => (
      document.removeEventListener(event, this.handleDocumentClick, true)
    ));
  }

  handleDocumentClick(e) {
    const container = this.node;
    if (container.contains(e.target) && container !== e.target) {
      return;
    }

    this.handleToggle(e);
  }

  handleToggle(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    this.props.onToggle(e);
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
      <Tag
        {...other}
        ref={(node) => { this.node = node; }}
        className={classes}
      />
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Dropdown.childContextTypes = childContextTypes;

export default Dropdown;
