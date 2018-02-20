/* eslint-disable */
import React from 'react';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Heading,
  InputField,
  RadioButton,
  TextArea,
  Wizard,
  WizardPage
} from '../src/index';


export default function Playground() {
  return (
    <div>
      <Heading h2>Buttons</Heading>
      <div>
        <Button large primary>Large Button</Button><br />
        <Button>Default Button</Button><br />
        <Button primary small>Small Button</Button><br />
        <Button danger>Delete Button</Button><br />
        <Button success>Success Button</Button><br />
        <Button disabled>Disabled Button</Button><br />
      </div><br />

      <Heading h2>Input Fields</Heading>
      <Form>
        <DatePicker label="Date Picker" placeholder="02/10/2018"/>
        <InputField label="Input Field" placeholder="Placeholder" />
        <TextArea label="Text Area" />
      </Form><br />

      <Heading h2>Checkbox</Heading>
      <Form>
        <Checkbox label="Default" />
        <Checkbox label="Focus" checked />
        <Checkbox label="Disabled" checked disabled />
      </Form><br />

      <Heading h2>Radio</Heading>
      <Form>
        <RadioButton label="Default" />
        <RadioButton label="Focus" checked />
        <RadioButton label="Disabled" checked disabled />
      </Form><br />

      <Heading h2>Wizard</Heading>
      <Wizard>
        <WizardPage title="Create Project" description="Use Lime or PX ID to prefill the information. Tick the checkbox if your projekt doesn't have and ID.">
          <Form>
            <InputField label="Project ID" placeholder="634 132 108" />
            <Checkbox label="This project doesn't have and ID number." />
          </Form>
        </WizardPage>
        <WizardPage title="Description" description="Describe the project so that partners, colleagues and customers easily know what the project is all about." >
          <Form>
            <InputField label="Title" placeholder="Concept ONE 2018" />
            <TextArea label="Project Description" />
          </Form>
        </WizardPage>
        <WizardPage title="Customer" description="Fill in the company/organization name as well as the customer's main contact person for the project.">
          <Form>
            <InputField label="Customer" placeholder="ÅF AB" />
            <InputField label="Contact Person" placeholder="Fredrik Sundqvist" />
          </Form>
        </WizardPage>
        <WizardPage title="Administrative Info" description="Fill in the name of the project manager at ÅF, toghether with the project's starting date and security level.">
          <Form>
            <InputField label="Project Manager" placeholder="Julia Stierna" />
            <DatePicker label="Starting Date" />
            
            <RadioButton label="Visible for ÅF co-workers" />
            <RadioButton label="Classified" checked />
          </Form>
        </WizardPage>
      </Wizard>
    </div>
  );
}
