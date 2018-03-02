import React from 'react';
import {
  Checkbox,
  DatePicker,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  RadioButton,
  TextArea,
  Wizard,
  WizardPage
} from '../../src/index';

const WizardExample = () => {
  return (
    <div className="example">
      <h1>Wizard</h1>
      <Wizard>
        <WizardPage title="Create Project">
          <h2>Create Project</h2>
          <p>Use Lime or PX ID to prefill the information. Tick the checkbox if your projekt doesn't have and ID.</p>
          <Form>
            <FormGroup>
              <Label>Project ID</Label>
              <Input placeholder="634 132 108" />
            </FormGroup>
            <FormGroup check>
              <Label>
                <Checkbox /> This project doesn't have and ID number.
              </Label>
            </FormGroup>
          </Form>
        </WizardPage>
        <WizardPage title="Description">
          <h2>Description</h2>
          <p>Describe the project so that partners, colleagues and customers easily know what the project is all about.</p>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input placeholder="Concept ONE 2018" />
            </FormGroup>
            <FormGroup>
              <Label>Project Description</Label>
              <TextArea resize="none" />
            </FormGroup>
          </Form>
        </WizardPage>
        <WizardPage title="Customer">
          <h2>Customer</h2>
          <p>Fill in the company/organization name as well as the customer's main contact person for the project.</p>
          <Form>
            <FormGroup>
              <Label>Customer</Label>
              <Input placeholder="ÅF AB" />
            </FormGroup>
            <FormGroup>
              <Label>Contact Person</Label>
              <Input placeholder="Fredrik Sundqvist" />
            </FormGroup>
          </Form>
        </WizardPage>
        <WizardPage title="Administrative Info">
          <h2>Administrative Info</h2>
          <p>Fill in the name of the project manager at ÅF, toghether with the project's starting date and security level.</p>
          <Form>
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
        </WizardPage>
      </Wizard>
    </div>
  );
};

export default WizardExample;
