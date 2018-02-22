import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Wizard.css';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
};

const defaultProps = {
  active: false,
  children: undefined,
};

const WizardNavLink = (props) => {
  const {
    active,
    children,
  } = props;

  return (
    <li><a className={active ? styles.active : ''} href="/">{children}</a></li>
  );
};

WizardNavLink.propTypes = propTypes;
WizardNavLink.defaultProps = defaultProps;

export default WizardNavLink;
