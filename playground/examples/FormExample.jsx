import React from 'react';
import {
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
} from '../../src/index';

const FormExample = () => {
  const divStyle = {
    borderTop: '1px solid lightgray',
    margin: '10px 0',
    padding: '20px 10px',
    width: 'auto'
  };

  return (
    <div>
      <Heading h2>Form</Heading>
      <div style={divStyle}>
        <Form inline>
          <Heading h3>Input</Heading>
          <FormGroup>
            <Label for="exampleTextInput">Text</Label>
            <Input id="exampleTextInput" placeholder="Text" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumberInput">Number</Label>
            <Input id="exampleNumberInput" placeholder="Number" type="number" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTelInput">Tel</Label>
            <Input id="exampleTelInput" placeholder="Tel" type="tel" />
          </FormGroup>
        </Form>

        <Form inline>
          <FormGroup>
            <Label for="exampleEmailInput">Email</Label>
            <Input id="exampleEmailInput" placeholder="Email" type="email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePasswordInput">Password</Label>
            <Input id="examplePasswordInput" placeholder="Password" type="password" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFormText">Form Text</Label>
            <Input id="exampleFormText" placeholder="Form Text" />
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
        </Form>

        <Form>
          <Heading h4>Validation</Heading>
          <FormGroup>
            <Label for="exampleTextInputValid">Valid</Label>
            <Input id="exampleTextInputValid" placeholder="Text" />
            <FormFeedback valid>Hurray! Something worked.</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleTextInputInvalid">Invalid</Label>
            <Input id="exampleTextInputInvalid" placeholder="Text" />
            <FormFeedback>Oh noes! Something went wrong.</FormFeedback>
          </FormGroup>
        </Form>

        <Form>
          <Heading h3>Date Picker</Heading>
          <FormGroup>
            <Label for="exampleDatePicker">Date</Label>
            <DatePicker id="exampleDatePicker" />
          </FormGroup>
        </Form>
       
        <Form>
          <Heading h3>Select</Heading>
          <FormGroup>
            <Label for="exampleSelect" value="">Select</Label>
            <Select id="exampleSelect" required value="">
              <SelectOption disabled hidden value="">Select Option</SelectOption>
              <SelectOption value="first">1</SelectOption>
              <SelectOption value="second">2</SelectOption>
              <SelectOption value="third">3</SelectOption>
            </Select>
          </FormGroup>
        </Form>

        <Form>
          <Heading h3>Text Area</Heading>
          <FormGroup>
            <Label for="exampleTextArea">Text Area</Label>
            <TextArea id="exampleTextArea" />
          </FormGroup>
        </Form>

        <Form>
          <FormGroup>
            <Heading h3>Radio Button</Heading>
            <FormGroup>
              <Label for="radioDefault">
                <RadioButton id="radioDefault" /> Default
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="radioHover">
                <RadioButton checked id="radioHover" /> Focus
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="radioDisabled">
                <RadioButton checked disabled id="radioDisabled" /> Disabled
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>

        <Form>
          <FormGroup>
            <Heading h4>Form Text</Heading>
            <FormGroup>
              <Label for="radioFormTextDefault">
                <RadioButton id="radioFormTextDefault" /> Default
                <FormText indented>Example indented help text that remains unchanged.</FormText>
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="radioFormTextHover">
                <RadioButton checked id="radioFormTextHover" /> Focus
                <FormText indented>Example indented help text that remains unchanged.</FormText>
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="radioFormTextDisabled">
                <RadioButton checked disabled id="radioFormTextDisabled" /> Disabled
                <FormText indented>Example indented help text that remains unchanged.</FormText>
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>


        <Form inline>
          <FormGroup>
            <Heading h4>Inline</Heading>
            <FormGroup>
              <Label for="radioInlineDefault">
                <RadioButton id="radioInlineDefault" /> Default
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="radioInlineHove">
                <RadioButton checked id="radioInlineHover" /> Focus
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="radioInlineDisabled">
                <RadioButton checked disabled id="radioInlineDisabled" /> Disabled
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>

        <Form>
          <FormGroup>
            <Heading h3>Checkbox</Heading>
            <FormGroup>
              <Label for="checkboxDefault">
                <Checkbox id="checkboxDefault" /> Default
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="checkboxHover">
                <Checkbox checked id="checkboxHover" /> Focus
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="checkboxDisabled">
                <Checkbox checked disabled id="checkboxDisabled" /> Disabled
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
        
        <Form>
          <FormGroup>
            <Heading h4>Form Text</Heading>
            <FormGroup>
              <Label for="checkboxFormTextDefault">
                <Checkbox id="checkboxFormTextDefault" /> Default
                <FormText indented>Example indented help text that remains unchanged.</FormText>
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="checkboxFormTextHover">
                <Checkbox checked id="checkboxFormTextHover" /> Focus
                <FormText indented>Example indented help text that remains unchanged.</FormText>
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="checkboxFormTextDisabled">
                <Checkbox checked disabled id="checkboxFormTextDisabled" /> Disabled
                <FormText indented>Example indented help text that remains unchanged.</FormText>
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>

        <Form inline>
          <FormGroup>
            <Heading h4>Inline</Heading>
            <FormGroup>
              <Label for="checkboxInlineDefault">
                <Checkbox id="checkboxInlineDefault" /> Default
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="checkboxInlineHover">
                <Checkbox checked id="checkboxInlineHover" /> Focus
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="checkboxInlineDisabled">
                <Checkbox checked disabled id="checkboxInlineDisabled" /> Disabled
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default FormExample;
