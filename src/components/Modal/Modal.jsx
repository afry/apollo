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
    this.state = {
      animationType: 'show',
      open: this.props.open,
    };
    this._dialogRef = React.createRef();
    this.setFocus = this.setFocus.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOpened = this.handleOpened.bind(this);
    this.handleClosed = this.handleClosed.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }

  getChildContext() {
    return {
      onToggle: this.props.onToggle,
    };
  }

  componentDidMount() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }

    if (this.state.open && this.props.autoFocus) {
      this.setFocus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && nextProps.open) {
      this.handleOpened();
    } else if (this.props.open && !nextProps.open) {
      this.handleClosed();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.autoFocus && this.state.open && !prevState.open) {
      this.setFocus();
    }
  }

  componentWillUnmount() {
    if (this.props.onExit) {
      this.props.onExit();
    }
  }

  setFocus() {
    if (!this._dialogRef) {
      return;
    }

    const { parentNode } = this._dialogRef.current;
    if (parentNode && typeof parentNode.focus === 'function') {
      parentNode.focus();
    }
  }

  handleToggle(e) {
    if (!this.props.onToggle) {
      e.preventDefault();
      return;
    }

    this.props.onToggle(e);
  }

  handleClosed() {
    this.setState({
      animationType: 'hide'
    });
  }

  handleOpened() {
    this.setState({
      animationType: 'show',
      open: true
    });

    if (this.props.onOpened) {
      this.props.onOpened();
    }
  }

  handleKeyboard(e) {
    if (!this.props.onToggle) {
      e.preventDefault();
      return;
    }

    const { keyboard, open } = this.props;
    if (open && keyboard && e.keyCode === 27) {
      this.props.onToggle(e);
    }
  }

  handleAnimationEnd() {
    const { animationType } = this.state;
    if (animationType === 'hide') {
      this.setState({ open: false });
      if (this.props.onClosed) {
        this.props.onClosed();
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
      keyboard, // eslint-disable-line no-unused-vars
      open, // eslint-disable-line no-unused-vars
      onClosed, // eslint-disable-line no-unused-vars
      onEnter, // eslint-disable-line no-unused-vars
      onExit, // eslint-disable-line no-unused-vars
      onOpened, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const { animationType } = this.state;

    if (!this.state.open) {
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

    const dialogClasses = classNames(
      dialogClassName,
      styles['modal-dialog'],
    );

    return (
      <div>
        <div {...other} {...modalAttributes} className={modalClasses}>
          <div ref={this._dialogRef} className={dialogClasses}>
            <div className={contentClasses}>
              {children}
            </div>
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
