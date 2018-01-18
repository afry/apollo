import React from 'react';
import { Heading, Button, Checkbox, Form, RadioButton, InputField, TextArea } from '../src/apollo.js';

export default class Playground extends React.Component {
    render() {
        return (
            <Form>
                <TextArea name="textarea" defaultValue="This is a default message" rows="10" cols="50" />
                <Button name="textarea" type="submit">Submit</Button>
                <Button name="textarea" type="reset">Reset</Button>
            </Form>
        );
    }
}
