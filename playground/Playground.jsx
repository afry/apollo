/* eslint-disable */
import React from 'react';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  FormGroup,
  Heading,
  Input,
  Label,
  RadioButton,
  TextArea,
  Wizard,
  WizardPage
} from '../src/index';


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

      <Form inline>
        <Heading h2>Input</Heading>
        <FormGroup>
          <Label for="exampleDatePicker">Date Picker</Label>
          <DatePicker id="exampleDatePicker" placeholder="02/10/2018"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleInput">Input Field</Label>
          <Input id="exampleInput" placeholder="Placeholder" />
        </FormGroup>
      </Form>

      <Form>
        <Heading h2>Text Area</Heading>
        <FormGroup>
          <Label for="exampleTextArea">Text Area</Label>
          <TextArea id="exampleTextArea" />
        </FormGroup>
      </Form>

      <Form inline>
        <Heading h2>Checkbox</Heading>
        <FormGroup>
          <Label for="exampleDefaultCheckbox">
            <Checkbox id="exampleDefaultCheckbox" /> Default
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleHoverCheckbox">
            <Checkbox checked id="exampleHoverCheckbox" /> Focus
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDisabledCheckbox">
            <Checkbox checked disabled id="exampleDisabledCheckbox" /> Disabled
          </Label>
        </FormGroup>
      </Form>

      <Form>
        <Heading h2>Radio</Heading>
        <FormGroup>
          <Label for="exampleDefaultRadioButton">
            <RadioButton id="exampleDefaultRadioButton" /> Default
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleHoveredRadioButton">
            <RadioButton checked id="exampleHoveredRadioButton" /> Focus
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDisabledRadioButton">
            <RadioButton checked disabled id="exampleDisabledRdioButton" /> Disabled
          </Label>
        </FormGroup>
      </Form>
    </div>
  );
}
