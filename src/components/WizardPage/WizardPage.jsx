import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Heading';

import * as styles from './WizardPage.css';

export default class WizardPage extends React.PureComponent {
  render() {
    return (
      <div className={styles.wizardpage}>
        <div className={styles.heading}>
          <Header h1>{this.props.title}</Header><br />
          <p>{this.props.description}</p><br />
        </div>
        {this.props.children}
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
