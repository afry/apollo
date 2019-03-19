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
    const { onToggle, open } = this.props;
    return {
      onToggle,
      open,
    };
  }

  componentDidMount() {
    const { open } = this.props;
    if (open) {
      this.addEventListeners();
    } else {
      this.removeEventListeners();
    }
  }

  componentDidUpdate(previousProps) {
    const { open } = this.props;
    if (open !== previousProps.open) {
      if (open) {
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
    ['click'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true),
    );
  }

  removeEventListeners() {
    ['click'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true),
    );
  }

  handleDocumentClick(e) {
    const container = this.node;
    if (container.contains(e.target) && container !== e.target) {
      return;
    }

    this.handleToggle(e);
  }

  handleToggle(e) {
    const { disabled, onToggle } = this.props;
    if (disabled) {
      e.preventDefault();
      return;
    }

    onToggle(e);
  }

  render() {
    const { className, tag: Tag, ...other } = this.props;

    const classes = classNames(className, styles.dropdown);

    return (
      <Tag
        {...other}
        ref={node => {
          this.node = node;
        }}
        className={classes}
      />
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Dropdown.childContextTypes = childContextTypes;

export default Dropdown;
