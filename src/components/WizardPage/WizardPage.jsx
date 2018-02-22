import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Heading';

import * as styles from './WizardPage.css';

const propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  children: undefined,
  description: undefined,
  title: undefined,
};

const WizardPage = (props) => {
  const {
    children,
    description,
    title,
  } = props;

  return (
    <div className={styles['wizard-page']}>
      <div className={styles['wizard-page-title']}>
        <Header h1>{title}</Header><br />
        <p className={styles['wizard-page-description']}>
          {description}
        </p><br />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

WizardPage.propTypes = propTypes;
WizardPage.defaultProps = defaultProps;

export default WizardPage;
