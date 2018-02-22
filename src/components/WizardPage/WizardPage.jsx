import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Heading';

import * as styles from './WizardPage.css';

export default class WizardPage extends React.PureComponent {
  render() {
    return (
      <div className={styles['wizard-page']}>
        <div className={styles['wizard-page-title']}>
          <Header h1>{this.props.title}</Header><br />
          <p className={styles['wizard-page-description']}>
            {this.props.description}
          </p><br />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

WizardPage.defaultProps = {
  children: undefined,
  description: undefined,
  title: undefined,
};

WizardPage.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string,
};
