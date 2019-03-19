import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Modal.css';

const propTypes = {
  autoFocus: PropTypes.bool,
  backdropClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  dialogClassName: PropTypes.string,
  keyboard: PropTypes.bool,
  onClosed: PropTypes.func,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
};

const defaultProps = {
  autoFocus: true,
  backdropClassName: undefined,
  children: undefined,
  className: undefined,
  contentClassName: undefined,
  dialogClassName: undefined,
  keyboard: false,
  onClosed: undefined,
  onEnter: undefined,
  onExit: undefined,
  onOpened: undefined,
  onToggle: undefined,
  open: false,
};

const childContextTypes = {
  onToggle: PropTypes.func,
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    const { open } = this.props;

    this.state = {
      animationType: 'show',
      open,
    };

    this.dialogRef = React.createRef();
    this.setFocus = this.setFocus.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOpened = this.handleOpened.bind(this);
    this.handleClosed = this.handleClosed.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }

  getChildContext() {
    const { onToggle } = this.props;
    return {
      onToggle,
    };
  }

  componentDidMount() {
    const { onEnter, autoFocus } = this.props;
    const { open } = this.props;

    if (onEnter) {
      onEnter();
    }

    if (open && autoFocus) {
      this.setFocus();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    if (!open && nextProps.open) {
      this.handleOpened();
    } else if (open && !nextProps.open) {
      this.handleClosed();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { autoFocus } = this.props;
    const { open } = this.state;

    if (autoFocus && open && !prevState.open) {
      this.setFocus();
    }
  }

  componentWillUnmount() {
    const { onExit } = this.props;
    if (onExit) {
      onExit();
    }
  }

  setFocus() {
    if (!this.dialogRef) {
      return;
    }

    const { parentNode } = this.dialogRef.current;
    if (parentNode && typeof parentNode.focus === 'function') {
      parentNode.focus();
    }
  }

  handleToggle(e) {
    const { onToggle } = this.props;

    if (!onToggle) {
      e.preventDefault();
      return;
    }

    onToggle(e);
  }

  handleClosed() {
    this.setState({
      animationType: 'hide',
    });
  }

  handleOpened() {
    this.setState({
      animationType: 'show',
      open: true,
    });

    const { onOpened } = this.props;

    if (onOpened) {
      onOpened();
    }
  }

  handleKeyboard(e) {
    const { keyboard, open, onToggle } = this.props;

    if (!onToggle) {
      e.preventDefault();
      return;
    }

    if (open && keyboard && e.keyCode === 27) {
      onToggle(e);
    }
  }

  handleAnimationEnd() {
    const { onClosed } = this.props;
    const { animationType } = this.state;
    if (animationType === 'hide') {
      this.setState({ open: false });
      if (onClosed) {
        onClosed();
      }
    }
  }

  render() {
    const {
      backdropClassName,
      children,
      className,
      contentClassName,
      dialogClassName,
      ...other
    } = this.props;

    const { animationType, open: isOpen } = this.state;

    if (!isOpen) {
      return null;
    }

    const modalClasses = classNames(
      className,
      styles.modal,
      styles[animationType],
    );

    const modalAttributes = {
      onAnimationEnd: this.handleAnimationEnd,
      onKeyUp: this.handleKeyboard,
      role: 'dialog',
      style: { display: 'block' },
      tabIndex: '-1',
    };

    const backdropClasses = classNames(
      backdropClassName,
      styles['modal-backdrop'],
    );

    const contentClasses = classNames(
      contentClassName,
      styles['modal-content'],
    );

    const dialogClasses = classNames(dialogClassName, styles['modal-dialog']);

    return (
      <div>
        <div {...other} {...modalAttributes} className={modalClasses}>
          <div ref={this.dialogRef} className={dialogClasses}>
            <div className={contentClasses}>{children}</div>
          </div>
        </div>
        <div className={backdropClasses} />
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;

export default Modal;
