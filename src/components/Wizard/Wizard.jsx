import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import WizardNavbar from './WizardNavbar';
import WizardNavLink from './WizardNavLink';

import * as styles from './Wizard.css';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

const defaultProps = {
  onCancel: undefined,
  onFinish: undefined,
  onNext: undefined,
  onPrevious: undefined,
};

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 0 };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  handleNext() {
    const step = this.state.currentStep + 1;
    this.setState({ currentStep: step });

    if (this.props.onNext) {
      this.props.onNext();
    }
  }

  handlePrevious() {
    const step = this.state.currentStep - 1;
    if (step < 0) { return; }
    this.setState({ currentStep: step });

    if (this.props.onPrevious) {
      this.props.onPrevious();
    }
  }

  handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  handleFinish() {
    if (this.props.onFinish) {
      this.props.onFinish();
    }
  }

  render() {
    const { children } = this.props;
    const { currentStep } = this.state;

    if (!children || children.length === 0) {
      return null;
    }

    const activePage = children.filter((page, index) => index === currentStep);

    const navlinks = children.map((page, index) => {
      const active = currentStep === index;
      return (
        <WizardNavLink key={page.props.title} active={active}>
          {page.props.title}
        </WizardNavLink>
      );
    });


    let nextButton;
    let previousButton;

    if (currentStep === 0) {
      previousButton = <Button onClick={this.handleCancel}>Cancel</Button>;
    } else {
      previousButton = <Button onClick={this.handlePrevious}>Go Back</Button>;
    }
    if (currentStep === children.length - 1) {
      nextButton = <Button color="success" onClick={this.handleFinish}>Finish</Button>;
    } else {
      nextButton = <Button color="primary" onClick={this.handleNext}>Next</Button>;
    }

    return (
      <div className={styles.wizard}>
        <WizardNavbar>{navlinks}</WizardNavbar>
        <div className={styles['wizard-content']}>
          {activePage}
        </div>
        <div className={styles['wizard-button-group']}>
          <div className={styles['pull-left']}>
            {previousButton}
          </div>
          <div className={styles['pull-right']}>
            {nextButton}
          </div>
        </div>
      </div>
    );
  }
}

Wizard.propTypes = propTypes;
Wizard.defaultProps = defaultProps;

export default Wizard;
