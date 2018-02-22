import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Wizard.css';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const WizardNavbar = (props) => {
  const { children } = props;
  const brand = 'One';

  return (
    <div className={styles['wizard-navbar']}>
      <div className={styles['wizard-navbar-brand']}>{brand}</div>
      <ul className={styles['wizard-navbar-nav']}>
        {children}
      </ul>
    </div>
  );
};

WizardNavbar.propTypes = propTypes;
WizardNavbar.defaultProps = defaultProps;

export default WizardNavbar;

