import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Heading from '../Heading';

import * as styles from './Wizard.css';

const Navlink = ({ children }) => <li><a>{children}</a></li>;

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>One</div>
      <ul className={styles['header-nav']}>
        <Navlink>Create Project</Navlink>
        <Navlink>Description</Navlink>
        <Navlink>Customer</Navlink>
        <Navlink>Administrative Info</Navlink>
      </ul>
    </div>
  );
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

  renderActivePage() {
    const { children } = this.props;
    if (children == null || children.length === 0) { return null; }

    const self = this;
    return children.filter((item, index) => index === self.state.currentStep);
  }

  renderSteps() {
    const { children } = this.props;
    if (children == null || children.length === 0) { return null; }

    const self = this;
    return children.map((child, index) => (
      <WizardStep
        key={index}
        active={self.state.currentStep === index}
        index={index + 1}
        name={child.props.title}
      />
    ));
  }

  renderButtonGroup() {
    const { children } = this.props;
    const { currentStep } = this.state;

    const len = children ? children.length : 0;

    return (
      <div className={styles['button-group']}>
        <div className={styles['button-group-left']}>
          {
            (currentStep === 0)
              ? <Button onClick={this.handleCancel}>Cancel</Button>
              : <Button onClick={this.handlePrevious}>Go Back</Button>
          }
        </div>

        <div className={styles['button-group-right']}>
          {
            (len > 0 && currentStep === len - 1) &&
              <Button onClick={this.handleFinish} success>Create</Button>
          }
          {
            (len > 0 && currentStep < len - 1) &&
              <Button onClick={this.handleNext} primary>Next</Button>
          }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.wizard}>
        <Header />
        <div className={styles.content}>
          {
            this.renderActivePage()
          }
        </div>
        <div className={styles.Footer}>
          {
            this.renderButtonGroup()
          }
        </div>
      </div>
    );
  }
}

Navlink.defaultProps = {
  children: undefined
};

Navlink.propTypes = {
  children: PropTypes.string
};


Header.defaultProps = {

};

Header.propTypes = {

};

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
