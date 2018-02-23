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

      <Heading h2>Input</Heading>
      <Form inline>
        <FormGroup>
          <Label for="exampleDatePicker">Date Picker</Label>
          <DatePicker id="exampleDatePicker" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTextInput">Text Input</Label>
          <Input id="exampleTextInput" placeholder="Placeholder" />
          <FormFeedback>Oh noes! Something went wrong.</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePasswordInput">Password Input</Label>
          <Input id="examplePasswordInput" placeholder="Placeholder" type="password" />
        </FormGroup>
      </Form>

      <Heading h2>Select</Heading>
      <Form>
        <FormGroup>
          <Label for="exampleSelect" value="">Select Input</Label>
          <Select id="exampleSelect" required value="">
            <SelectOption disabled hidden value="">Select Option...</SelectOption>
            <SelectOption value="first">First Option</SelectOption>
            <SelectOption value="second">Second Option</SelectOption>
            <SelectOption value="third">Second Option</SelectOption>
          </Select>
        </FormGroup>
      </Form>

      <Heading h2>Text Area</Heading>
      <Form>
        <FormGroup>
          <Label for="exampleTextArea">Text Area</Label>
          <TextArea id="exampleTextArea" />
        </FormGroup>
      </Form>

      <Heading h2>Checkbox</Heading>
      <Form>
        <FormGroup>
          <Label for="exampleDefaultCheckbox">
            <Checkbox id="exampleDefaultCheckbox" /> Default
            <FormText indented>Example indented help text that remains unchanged.</FormText>
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

      <Heading h2>Radio</Heading>
      <Form>
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
