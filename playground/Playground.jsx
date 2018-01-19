import React from 'react';
import { Heading, RadioButton, Checkbox, DatePicker, InputField, Form } from '../src/apollo';

export default class Playground extends React.Component {
  constructor() {
    super();
    this.state = { confirmed: false, selectedGender: 'Male' };

    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  handleConfirm(id, newVal) {
    this.setState({ confirmed: newVal });
  }

  handleGenderChange(id, newVal) {
    if (newVal) {
      this.setState({ selectedGender: id });
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
        <Checkbox id="Confirm" label="Confirm" name="confirm" checked={this.state.confirmed} onChange={this.handleConfirm} />
        <Form>
          <RadioButton id="Male" name="male" label="Male" checked={this.state.selectedGender === 'Male'} onChange={this.handleGenderChange} />
          <RadioButton id="Female" name="female" label="Female" checked={this.state.selectedGender === 'Female'} onChange={this.handleGenderChange} />
        </Form>
        <br />
        <DatePicker label="Pick a date" defaultValue="1701-01-01" onChange={(date) => { console.log(date); }} />
      </div>
    );
  }
}
