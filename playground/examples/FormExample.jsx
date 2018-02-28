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
  return (
    <div className="example">
      <Heading h1>Form</Heading>
      <Form inline>
        <Heading h3>Input</Heading>
        <FormGroup>
          <Label for="text_input">Text</Label>
          <Input id="text_input" placeholder="Text" />
        </FormGroup>
        <FormGroup>
          <Label for="number_input">Number</Label>
          <Input id="number_input" placeholder="Number" type="number" />
        </FormGroup>
        <FormGroup>
          <Label for="tel_input">Tel</Label>
          <Input id="tel_input" placeholder="Tel" type="tel" />
        </FormGroup>
      </Form>

      <Form inline>
        <FormGroup>
          <Label for="email_input">Email</Label>
          <Input id="email_input" placeholder="Email" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password_input">Password</Label>
          <Input id="password_input" placeholder="Password" type="password" />
        </FormGroup>
        <FormGroup>
          <Label for="input_with_form_text">Form Text</Label>
          <Input id="input_with_form_text" placeholder="Form Text" />
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
      </Form>

      <Form>
        <FormGroup>
          <Label for="disabled_input">Disabled</Label>
          <Input disabled id="disabled_input" placeholder="Disabled" />
        </FormGroup>
      </Form>

      <Form>
        <Heading h4>Validation</Heading>
        <FormGroup>
          <Label for="input_with_valid_form_feedback">Valid</Label>
          <Input id="input_with_valid_form_feedback" placeholder="Text" />
          <FormFeedback valid>Hurray! Something worked.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="input_with_invalid_form_feedback">Invalid</Label>
          <Input id="input_with_invalid_form_feedback" placeholder="Text" />
          <FormFeedback>Oh noes! Something went wrong.</FormFeedback>
        </FormGroup>
      </Form>

      <Form>
        <Heading h3>Date Picker</Heading>
        <FormGroup>
          <Label for="date_picker">Date</Label>
          <DatePicker id="date_picker" />
        </FormGroup>
        <FormGroup>
          <Label for="disabled_date_picker">Disabled</Label>
          <DatePicker disabled id="disabled_date_picker" />
        </FormGroup>
      </Form>

      <Form>
        <Heading h3>Select</Heading>
        <FormGroup>
          <Label for="select" value="">Select</Label>
          <Select id="select" required value="">
            <SelectOption disabled hidden value="">Select Option</SelectOption>
            <SelectOption value="first">1</SelectOption>
            <SelectOption value="second">2</SelectOption>
            <SelectOption value="third">3</SelectOption>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label for="disabled_select" value="">Disabled</Label>
          <Select disabled id="disabled_select" required value="">
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
          <Label for="text_area">Text Area</Label>
          <TextArea id="text_area" />
        </FormGroup>
        <FormGroup>
          <Label for="disabled_text_area">Disabled</Label>
          <TextArea disabled id="disabled_text_area" />
        </FormGroup>
      </Form>

      <Form>
        <FormGroup>
          <Heading h3>Radio Button</Heading>
          <FormGroup check>
            <Label for="radio_button">
              <RadioButton id="radio_button" /> Default
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="focused_radio_button">
              <RadioButton checked id="focused_radio_button" /> Focus
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="disabled_radio_button">
              <RadioButton checked disabled id="disabled_radio_button" /> Disabled
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>

      <Form>
        <FormGroup>
          <Heading h4>Form Text</Heading>
          <FormGroup check>
            <Label for="radio_button_with_form_text">
              <RadioButton id="radio_button_with_form_text" /> Default
              <FormText indented>Example indented help text that remains unchanged.</FormText>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="focused_radio_button_with_form_text">
              <RadioButton checked id="focused_radio_button_with_form_text" /> Focus
              <FormText indented>Example indented help text that remains unchanged.</FormText>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="disabled_radio_button_with_form_text">
              <RadioButton checked disabled id="disabled_radio_button_with_form_text" /> Disabled
              <FormText indented>Example indented help text that remains unchanged.</FormText>
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>


      <Form inline>
        <FormGroup>
          <Heading h4>Inline</Heading>
          <FormGroup check>
            <Label for="radio_button_inlined">
              <RadioButton id="radio_button_inlined" /> Default
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="focused_radio_button_inlined">
              <RadioButton checked id="focused_radio_button_inlined" /> Focus
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="disabled_radio_button_inlined">
              <RadioButton checked disabled id="disabled_radio_button_inlined" /> Disabled
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>

      <Form>
        <FormGroup>
          <Heading h3>Checkbox</Heading>
          <FormGroup check>
            <Label for="checkbox">
              <Checkbox id="checkbox" /> Default
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="focused_checkbox">
              <Checkbox checked id="focused_checkbox" /> Focus
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="disabled_checkbox">
              <Checkbox checked disabled id="disabled_checkbox" /> Disabled
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
      
      <Form>
        <FormGroup>
          <Heading h4>Form Text</Heading>
          <FormGroup check>
            <Label for="exampleFormTextCheckboxDefault">
              <Checkbox id="exampleFormTextCheckboxDefault" /> Default
              <FormText indented>Example indented help text that remains unchanged.</FormText>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="checkboxFormTextHover">
              <Checkbox checked id="checkboxFormTextHover" /> Focus
              <FormText indented>Example indented help text that remains unchanged.</FormText>
            </Label>
          </FormGroup>
          <FormGroup check>
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
          <FormGroup check>
            <Label for="checkboxInlineDefault">
              <Checkbox id="checkboxInlineDefault" /> Default
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="checkboxInlineHover">
              <Checkbox checked id="checkboxInlineHover" /> Focus
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label for="checkboxInlineDisabled">
              <Checkbox checked disabled id="checkboxInlineDisabled" /> Disabled
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FormExample;
