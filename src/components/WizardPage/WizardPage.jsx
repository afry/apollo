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
  title: undefined,
  description: undefined,
  children: undefined,
};

WizardPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
