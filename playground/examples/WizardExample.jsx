import React from 'react';
import {
  Container,
  Checkbox,
  DatePicker,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  RadioButton,
  TextArea,
  Wizard,
  WizardControl,
  WizardStep
} from '../../src/index';

class WizardExample extends React.Component {
  constructor(props) {
    super(props);
    this.forms = [];
    this.state = { currentStep: 0, errorMessages: {} };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);

    this.validate = this.validate.bind(this);
  }

  handleNext(e) {
    if (!this.validate()) {
      return;
    }

    // backend validation

    const step = this.state.currentStep + 1;
    this.setState({ currentStep: step });
  }

  handlePrevious(e) {
    if (!this.validate()) {
      return;
    }

    const step = this.state.currentStep - 1;
    this.setState({ currentStep: step });
  }

  validate() {
    const form = this.forms[this.state.currentStep];
    const result = form.checkValidity();
    const messages = {};
    for (let i = 0; i < form.length; i += 1) {
      const child = form[i];
      if (!child.validity.valid) {
        messages[child.name] = child.validationMessage;
      }
    }
    this.setState({ errorMessages: messages });

    return result;
  }

  render() {
    const containerStyle = {
      height: '720px'
    };

    return (
      <Container style={containerStyle}>
        <h1>Wizard</h1>
        <Wizard
          activeStep={this.state.currentStep}
          brand="One"
          onCancel={() => {}}
          onFinish={() => {}}
          onNext={this.handleNext}
          onPrevious={this.handlePrevious}
        >
          <WizardStep label="Create Project">
            <Form innerRef={(form) => { this.forms[0] = form; }}>
              <h2>Create Project</h2>
              <p>Use Lime or PX ID to prefill the information. Tick the checkbox if your projekt doesn't have and ID.</p>
              <FormGroup>
                <Label>Project ID</Label>
                <Input placeholder="01234" />
              </FormGroup>
              <FormGroup check>
                <Label>
                  <Checkbox /> This project doesn't have and ID number.
                </Label>
              </FormGroup>
            </Form>
            <WizardControl action="cancel">Cancel</WizardControl>
            <WizardControl action="next" color="primary">Next</WizardControl>
          </WizardStep>
          <WizardStep label="Description">
            <Form innerRef={(form) => { this.forms[1] = form; }}>
              <h2>Description</h2>
              <p>Describe the project so that partners, colleagues and customers easily know what the project is all about.</p>
              <FormGroup>
                <Label>Title</Label>
                <Input name="title" placeholder="Concept ONE 2018" required />
                <FormFeedback>{this.state.errorMessages.title}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Project Description</Label>
                <TextArea maxLength="10" name="description" resize="none" />
                <FormFeedback>{this.state.errorMessages.description}</FormFeedback>
              </FormGroup>
            </Form>
            <WizardControl action="previous">Go Back</WizardControl>
            <WizardControl action="next" color="primary">Next</WizardControl>
          </WizardStep>
          <WizardStep label="Customer">
            <Form innerRef={(form) => { this.forms[2] = form; }}>
              <h2>Customer</h2>
              <p>Fill in the company/organization name as well as the customer's main contact person for the project.</p>
              <FormGroup>
                <Label>Customer</Label>
                <Input placeholder="ÅF AB" />
              </FormGroup>
              <FormGroup>
                <Label>Contact Person</Label>
                <Input placeholder="Fredrik Sundqvist" />
              </FormGroup>
            </Form>
            <WizardControl action="previous">Go Back</WizardControl>
            <WizardControl action="next" color="primary">Next</WizardControl>
          </WizardStep>
          <WizardStep label="Administrative Info">
            <Form innerRef={(form) => { this.forms[3] = form; }}>
              <h2>Administrative Info</h2>
              <p>Fill in the name of the project manager at ÅF, toghether with the project's starting date and security level.</p>
              <FormGroup>
                <Label>Project Manager</Label>
                <Input placeholder="Julia Stierna" />
              </FormGroup>
              <FormGroup>
                <Label>Starting Date</Label>
                <DatePicker />
              </FormGroup>
              <FormGroup check>
                <Label>
                  <RadioButton /> Visible for ÅF co-workers
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label>
                  <RadioButton checked /> Classified
                  <FormText indented>Only visible for invited members</FormText>
                </Label>
              </FormGroup>
            </Form>
            <WizardControl action="previous">Go Back</WizardControl>
            <WizardControl action="finish" color="success">Finish</WizardControl>
          </WizardStep>
        </Wizard>
      </Container>
    );
  }
}

export default WizardExample;
