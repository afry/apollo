import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './WizardControl.css';

const propTypes = {
  action: PropTypes.oneOf(['cancel', 'finish', 'next', 'previous']).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  color: 'secondary',
  disabled: false,
  tag: 'button',
};

const contextTypes = {
  onCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

class WizardControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    switch (this.props.action) {
      case 'cancel':
        this.context.onCancel(e);
        break;
      case 'finish':
        this.context.onFinish(e);
        break;
      case 'next':
        this.context.onNext(e);
        break;
      case 'previous':
        this.context.onPrevious(e);
        break;
      default:
    }
  }

  render() {
    const {
      action,
      className,
      color,
      disabled,
      tag: Tag,
      ...other
    } = this.props;

    const horizontal = (action === 'cancel' || action === 'previous')
      ? 'left'
      : 'right';

    const classes = classNames(
      className,
      styles['wizard-control'],
      styles[`wizard-control-${horizontal}`],
      color ? styles[`wizard-control-${color}`] : '',
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

WizardControl.propTypes = propTypes;
WizardControl.defaultProps = defaultProps;
WizardControl.contextTypes = contextTypes;

export default WizardControl;
