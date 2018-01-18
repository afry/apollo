import React from 'react';
import { Heading, Button, Checkbox, Form, RadioButton } from '../src/apollo.js';

export default class Playground extends React.Component {
    render() {
        return (
            <Form>
                <RadioButton name="gender" value="male" label="Male" checked />
                <RadioButton name="gender" value="female" label="Female" />
                <div>
                    <Button type="submit" >Submit</Button>
                </div>
            </Form>
        );
    }
}
