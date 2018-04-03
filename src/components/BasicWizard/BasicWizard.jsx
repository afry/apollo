import React from 'react';
import PropTypes from 'prop-types';
import Wizard from '../Wizard';

const propTypes = {
  onCancel: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};

class BasicWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 0 };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  }

  handleFinish(e) {
    if (this.props.onFinish) {
      this.props.onFinish(e);
    }
  }

  handleNext() {
    const step = this.state.currentStep + 1;
    this.setState({ currentStep: step });
  }

  handlePrevious() {
    const step = this.state.currentStep - 1;
    this.setState({ currentStep: step });
  }

  render() {
    return (
      <Wizard
        {...this.props}
        activeStep={this.state.currentStep}
        onCancel={this.handleCancel}
        onFinish={this.handleFinish}
        onNext={this.handleNext}
        onPrevious={this.handlePrevious}
      />
    );
  }
}

BasicWizard.propTypes = propTypes;

export default BasicWizard;
