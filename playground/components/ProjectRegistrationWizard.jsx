import React from 'react';
import { Wizard, WizardPage, Form, DatePicker, Checkbox, RadioButton, InputField, TextArea } from '../../src/index';

export default class ProjectRegistrationWizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactPerson: '',
      customer: '',
      generateId: false,
      projectDescription: '',
      projectId: '',
      projectManager: '',
      projectTitle: '',
      startingDate: '',
      visibility: 'visible',
    };

    this.handleGenerateIdChange = this.handleGenerateIdChange.bind(this);
    this.handleProjectIdChange = this.handleProjectIdChange.bind(this);
    this.handleProjectTitleChange = this.handleProjectTitleChange.bind(this);
    this.handleProjectDescriptionChange = this.handleProjectDescriptionChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleContactPersonChange = this.handleContactPersonChange.bind(this);
    this.handleProjectManagerChange = this.handleProjectManagerChange.bind(this);
    this.handleStartintDateChange = this.handleStartintDateChange.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  handleGenerateIdChange(value) {
    this.setState({ generateId: value });
  }

  handleProjectIdChange(value) {
    this.setState({ projectId: value });
  }

  handleProjectTitleChange(value) {
    this.setState({ projectTitle: value });
  }

  handleProjectDescriptionChange(value) {
    this.setState({ projectDescription: value });
  }

  handleCustomerChange(value) {
    this.setState({ customer: value });
  }

  handleContactPersonChange(value) {
    this.setState({ contactPerson: value });
  }

  handleProjectManagerChange(value) {
    this.setState({ projectManager: value });
  }

  handleStartintDateChange(value) {
    this.setState({ startingDate: value });
  }

  handleVisibilityChange(checked, value) {
    if (checked) {
      this.setState({ visibility: value });
    }
  }

  render() {
    const divStyle = {
      height: '750px',
      width: '1250px',
    };

    return (
      <div style={divStyle}>
        <Wizard
          description=""
          onCancel={() => {}}
          onFinish={() => {}}
          title="New project"
        >
          <WizardPage description="" title="Project ID">
            <Form>
              <InputField disabled={this.state.generateId} label="ID" onChange={this.handleProjectIdChange} placeholder="Lime or PX" type="number" value={this.state.projectId} />
              <Checkbox checked={this.state.generateId} hint="Press me if you'd like a generated id." label="This project does not have an ID" onChange={this.handleGenerateIdChange} />
            </Form>
          </WizardPage>
          <WizardPage description="" title="Title & description">
            <Form>
              <InputField label="Title" onChange={this.handleProjectTitleChange} placeholder="Name your project" value={this.state.projectTitle} />
              <TextArea label="Project description" onChange={this.handleProjectDescriptionChange} placeholder="Describe your project" value={this.state.projectDescription} />
            </Form>
          </WizardPage>
          <WizardPage title="Who is the customer?">
            <Form>
              <InputField label="Customer" onChange={this.handleCustomerChange} placeholder="Name" value={this.state.customer} />
              <InputField label="Contact person" onChange={this.handleContactPersonChange} placeholder="Name" value={this.state.contactPerson} />
            </Form>
          </WizardPage>
          <WizardPage description="Project manager from ÅF, starting date and security level." title="Administrative info">
            <Form>
              <InputField label="Project manager" onChange={this.handleProjectManagerChange} placeholder="Name" value={this.state.projectManager} />
              <DatePicker label="Starting date" onChange={this.handleStartintDateChange} placeholder={new Date().toISOString().substr(0, 10)} value={this.state.startingDate} />
            </Form>
            <Form>
              <RadioButton checked={this.state.visibility === 'visible'} label="Visible for ÅF co-workers" onChange={this.handleVisibilityChange} value="visible" />
              <RadioButton checked={this.state.visibility === 'hidden'} description="This project will only be shown for invited members." label="Classified" onChange={this.handleVisibilityChange} value="hidden" />
            </Form>
          </WizardPage>
        </Wizard>
      </div>
    );
  }
}
