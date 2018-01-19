import React from 'react';
import { Heading, RadioButton, Checkbox, DatePicker, InputField, Form } from '../src/apollo';

export default class Playground extends React.Component {
  constructor() {
    super();
    this.state = { confirmed: false, selectedGender: 'Male', date: '1701-01-01' };

    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  handleConfirm(checked) {
    this.setState({ confirmed: checked });
  }

  handleGenderChange(checked, value) {
    if (checked) {
      this.setState({ selectedGender: value });
    }
  }

  render() {
    return (
      <div>
        <Heading element="h3">Step 3/4</Heading>
        <Heading element="h2">Who is the customer?</Heading>
        <Form>
          <InputField label="Customer" placeholder="Name" />
          <br />
          <InputField label="Contact Person" placeholder="Name" />
        </Form>
        <br />
        <Checkbox label="Confirm" name="confirm" checked={this.state.confirmed} onChange={this.handleConfirm} />
        <Form>
          <RadioButton value="Male" label="Male" checked={this.state.selectedGender === 'Male'} onChange={this.handleGenderChange} />
          <RadioButton value="Female" label="Female" checked={this.state.selectedGender === 'Female'} onChange={this.handleGenderChange} />
        </Form>
        <br />
        <DatePicker label="Pick a date" value={this.state.date} onChange={(d) => { this.setState({ date: d }); }} />
      </div>
    );
  }
}
