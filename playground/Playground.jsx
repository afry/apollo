import React from 'react';
import { Button, Form, TextArea } from '../src/apollo';

export default function Playground() {
  return (
    <Form>
      <TextArea name="textarea" defaultValue="This is a default message" rows="10" cols="50" />
      <Button name="textarea" type="submit">Submit</Button>
      <Button name="textarea" type="reset">Reset</Button>
    </Form>
  );
}
