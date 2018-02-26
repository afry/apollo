/* eslint-disable */
import React from 'react';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Heading,
  Input,
  Label,
  RadioButton,
  Select,
  SelectOption,
  TextArea,
  Wizard,
  WizardPage
} from '../src/index';

import FormExample from './examples/FormExample';


export default function Playground() {
  return (
    <div>
      <Form>
        <Heading h2>Button</Heading>
        <FormGroup>
          <Button color="primary" size="large">Large Button</Button>
        </FormGroup>
        <FormGroup>
          <Button>Default Button</Button>
        </FormGroup>
        <FormGroup>
          <Button color="primary" size="small">Small Button</Button>
        </FormGroup>
        <FormGroup>
          <Button color="danger">Delete Button</Button>
        </FormGroup>
        <FormGroup>
          <Button color="success">Success Button</Button>
        </FormGroup>
        <FormGroup>
          <Button disabled>Disabled Button</Button>
        </FormGroup>
      </Form>

      <FormExample />
     
    </div>
  );
}
