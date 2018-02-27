import React from 'react';
import {
  Checkbox,
  DatePicker,
  Form,
  FormGroup,
  FormText,
  Heading,
  Input,
  Label,
  RadioButton,
  TextArea,
  Wizard,
  WizardPage
} from '../../src/index';

const WizardExample = () => {
  const divStyle = {
    borderTop: '1px solid lightgray',
    margin: '10px 0',
    padding: '20px 10px',
    width: 'auto'
  };

  return (
    <div>
      <div style={divStyle}>
        <Heading h2>Wizard</Heading>
        <Wizard>
          <WizardPage 
            title="Create Project" 
            description="Use Lime or PX ID to prefill the information. Tick the checkbox if your projekt doesn't have and ID."
          >
            <Form>
              <FormGroup>
                <Label>Project ID</Label>
                <Input placeholder="634 132 108" />
              </FormGroup>
              <FormGroup>
                <Label>
                  <Checkbox /> This project doesn't have and ID number.
                </Label>
              </FormGroup>
            </Form>
          </WizardPage>
          <WizardPage 
            title="Description" 
            description="Describe the project so that partners, colleagues and customers easily know what the project is all about."
          >
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
          <WizardPage title="Customer" description="Fill in the company/organization name as well as the customer's main contact person for the project.">
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
          <WizardPage
            title="Administrative Info"
            description="Fill in the name of the project manager at ÅF, toghether with the project's starting date and security level."
          >
            <Form>
              <FormGroup>
                <Label>Project Manager</Label>
                <Input placeholder="Julia Stierna" />
              </FormGroup>
              <FormGroup>
                <Label>Starting Date</Label>
                <DatePicker />
              </FormGroup>
              <FormGroup>
                <Label>
                  <RadioButton /> Visible for ÅF co-workers
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  <RadioButton checked /> Classified
                </Label>
                <FormText indented>Only visible for invited members</FormText>
              </FormGroup>
            </Form>
          </WizardPage>
        </Wizard>
      </div>
    </div>
  );
};

export default WizardExample;
