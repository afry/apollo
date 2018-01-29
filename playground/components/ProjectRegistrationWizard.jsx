import React from 'react';
import { Wizard, WizardPage, Form, DatePicker, Checkbox, RadioButton, InputField, TextArea } from '../../src/index';

export default class ProjectRegistrationWizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generateId: false,
      projectId: '',
      projectTitle: '',
      projectDescription: '',
      customer: '',
      contactPerson: '',
      projectManager: '',
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
          title="New project"
          description=""
          onCancel={() => {}}
          onFinish={() => {}}
        >
          <WizardPage title="Project ID" description="">
            <Form>
              <InputField type="number" label="ID" value={this.state.projectId} placeholder="Lime or PX" onChange={this.handleProjectIdChange} disabled={this.state.generateId} />
              <Checkbox label="This project does not have an ID" hint="Press me if you'd like a generated id." checked={this.state.generateId} onChange={this.handleGenerateIdChange} />
            </Form>
          </WizardPage>
          <WizardPage title="Title & description" description="">
            <Form>
              <InputField label="Title" value={this.state.projectTitle} placeholder="Name your project" onChange={this.handleProjectTitleChange} />
              <TextArea label="Project description" value={this.state.projectDescription} placeholder="Describe your project" onChange={this.handleProjectDescriptionChange} />
            </Form>
          </WizardPage>
          <WizardPage title="Who is the customer?" description="">
            <Form>
              <InputField label="Customer" value={this.state.customer} placeholder="Name" onChange={this.handleCustomerChange} />
              <InputField label="Contact person" value={this.state.contactPerson} placeholder="Name" onChange={this.handleContactPersonChange} />
            </Form>
          </WizardPage>
          <WizardPage title="Administrative info" description="Project manager from ÅF, starting date and security level.">
            <Form>
              <InputField label="Project manager" value={this.state.projectManager} placeholder="Name" onChange={this.handleProjectManagerChange} />
              <DatePicker label="Starting date" value={this.state.startingDate} placeholder={new Date().toISOString().substr(0, 10)} onChange={this.handleStartintDateChange} />
            </Form>
            <Form>
              <RadioButton value="visible" label="Visible for ÅF co-workers" description="" checked={this.state.visibility === 'visible'} onChange={this.handleVisibilityChange} />
              <RadioButton value="hidden" label="Classified" description="This project will only be shown for invited members." checked={this.state.visibility === 'hidden'} onChange={this.handleVisibilityChange} />
            </Form>
          </WizardPage>
        </Wizard>
      </div>
    );
  }
}
