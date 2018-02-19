import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Heading from '../Heading';
import WizardStep from './WizardStep';

import * as styles from './Wizard.css';

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
    const len = children ? children.length : 0;

    const { currentStep } = this.state;

    return (
      <div className={styles.ButtonGroup}>
        <Button onClick={this.handleCancel}>Cancel</Button>
        {
          (currentStep > 0) &&
            <Button onClick={this.handlePrevious}>Previous</Button>
        }
        {
          (len > 0 && currentStep === len - 1) &&
            <Button onClick={this.handleFinish}>Finish</Button>
        }
        {
          (len > 0 && currentStep < len - 1) &&
            <Button onClick={this.handleNext}>Next</Button>
        }
      </div>
    );
  }

  render() {
    return (
      <div className={styles.Wizard}>
        <div className={styles.LeftPanel}>
          <div className={styles.Content}>
            <div>
              <Heading h1>{this.props.title}</Heading>
              <Heading h3>{this.props.description}</Heading>
            </div>
            <div className={styles.Steps}>
              {
                this.renderSteps()
              }
            </div>
          </div>
        </div>
        <div className={styles.RightPanel}>
          <div className={styles.Content}>
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
      </div>
    );
  }
}

Wizard.defaultProps = {
  description: undefined,
  onCancel: undefined,
  onFinish: undefined,
  onNext: undefined,
  onPrevious: undefined,
  title: undefined,
};

Wizard.propTypes = {
  // TODO(jon): should expect children to be of type WizardPage.
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  description: PropTypes.string,
  onCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  title: PropTypes.string,
};
