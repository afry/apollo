import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import * as styles from './Wizard.css';

const Navlink = ({ active, children }) => {
  const className = active ? styles.active : '';
  return <li><a className={className} href="/">{children}</a></li>;
};

Navlink.defaultProps = {
  active: false,
  children: undefined,
};

Navlink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
};

const Navbar = ({ children }) => {
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

Navbar.defaultProps = {
  children: undefined,
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default class Wizard extends React.Component {
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

    const { onNext } = this.props;
    if (onNext == null) { return; }
    onNext();
  }

  handlePrevious() {
    const step = this.state.currentStep - 1;
    if (step < 0) { return; }
    this.setState({ currentStep: step });

    const { onPrevious } = this.props;
    if (onPrevious == null) { return; }
    onPrevious();
  }

  handleCancel() {
    const { onCancel } = this.props;
    if (onCancel == null) { return; }
    onCancel();
  }

  handleFinish() {
    const { onFinish } = this.props;
    if (onFinish == null) { return; }
    onFinish();
  }

  render() {
    const { children } = this.props;
    const { currentStep } = this.state;

    let navlinks = null;
    let activePage = null;
    let prevButton = null;
    let nextButton = null;

    if (children && children.length) {
      navlinks = children.map((page, index) => {
        const active = currentStep === index;
        return <Navlink key={page.props.title} active={active}>{page.props.title}</Navlink>;
      });

      activePage = children.filter((page, index) => index === currentStep);

      if (currentStep === 0) {
        prevButton = <Button onClick={this.handleCancel}>Cancel</Button>;
      } else {
        prevButton = <Button onClick={this.handlePrevious}>Go Back</Button>;
      }
      if (currentStep === children.length - 1) {
        nextButton = <Button onClick={this.handleFinish} success>Finish</Button>;
      } else {
        nextButton = <Button onClick={this.handleNext} primary>Next</Button>;
      }
    }

    return (
      <div className={styles.wizard}>
        <Navbar>{navlinks}</Navbar>
        <div className={styles['wizard-content']}>
          {activePage}
        </div>
        <div className={styles['wizard-button-group']}>
          <div className={styles['pull-left']}>
            {prevButton}
          </div>
          <div className={styles['pull-right']}>
            {nextButton}
          </div>
        </div>
      </div>
    );
  }
}

Wizard.defaultProps = {
  onCancel: undefined,
  onFinish: undefined,
  onNext: undefined,
  onPrevious: undefined,
};

Wizard.propTypes = {
  // TODO(jon): should expect children to be of type WizardPage.
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};
