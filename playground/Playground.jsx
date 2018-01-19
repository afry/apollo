import React from 'react';
import { Heading, Button, DatePicker, InputField, Form } from '../src/apollo';

export default function Playground() {
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
      <Form>
        <Button>Back</Button>
        <Button>Next</Button>
      </Form>
      <br />
      <DatePicker label="Pick a date" defaultValue="1701-01-01" onChange={(date) => { console.log(date); }} />
    </div>
  );
}
