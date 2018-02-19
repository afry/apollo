import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Wizard.css';

export default class WizardStep extends React.PureComponent {
  render() {
    let classNames = styles.Step;
    classNames += ` ${this.props.active ? styles.active : ''}`;

    return (
      <div className={classNames}>
        <hr />{this.props.index} {this.props.name}
      </div>
    );
  }
}

WizardStep.defaultProps = {
  active: false,
  index: 0,
  name: undefined,
};

WizardStep.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number,
  name: PropTypes.string,
};
