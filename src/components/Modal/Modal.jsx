import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Modal.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  children: undefined,
  className: undefined,
  onToggle: undefined,
  open: false,
  tag: 'div'
};

const childContextTypes = {
  onToggle: PropTypes.func,
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getChildContext() {
    return {
      onToggle: this.props.onToggle,
    };
  }

  handleToggle(e) {
    if (!this.props.onToggle) {
      e.preventDefault();
      return;
    }

    this.props.onToggle(e);
  }

  render() {
    const {
      children,
      className,
      open,
      ...other
    } = this.props;

    if (!open) {
      return null;
    }

    const classes = classNames(
      className,
      styles.modal,
    );

    return (
      <div>
        <div {...other} className={classes}>
          <div className={classNames(styles['modal-dialog'])}>
            <div className={classNames(styles['modal-content'])}>
              {children}
            </div>
          </div>
        </div>
        <div className={classNames(styles['modal-backdrop'])} />
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;

export default Modal;
