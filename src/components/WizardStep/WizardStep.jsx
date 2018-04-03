import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './WizardStep.css';

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  className: undefined,
  label: undefined,
  tag: 'div',
};

const WizardStep = (props) => {
  const {
    active,
    className,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['wizard-step'],
    active ? styles.active : '',
  );

  return (
    <Tag {...other} className={classes} />
  );
};

WizardStep.propTypes = propTypes;
WizardStep.defaultProps = defaultProps;

export default WizardStep;
