import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './WizardPage.css';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: undefined,
};

const WizardPage = (props) => {
  const {
    ...other
  } = props;

  return (
    <div {...other} className={styles['wizard-page']} />
  );
};

WizardPage.propTypes = propTypes;
WizardPage.defaultProps = defaultProps;

export default WizardPage;
