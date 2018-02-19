import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Heading';

import * as styles from './WizardPage.css';

export default class WizardPage extends React.PureComponent {
  render() {
    return (
      <div className={styles.WizardPage}>
        <Header h1>{this.props.title}</Header><br />
        <Header h3>{this.props.description}</Header><br />
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
