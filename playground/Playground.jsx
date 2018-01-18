import React from 'react';
import { Heading, Button, Checkbox } from '../src/apollo.js';

export default class Playground extends React.Component {
    render() {
        return (
            <div>
                <Heading element='h1'>Hello Playground</Heading>
                <Button onClick={()=>{ console.log("click"); }} > 
                    Click me!
                </Button>
                <Checkbox label="Toggle me!" />
            </div>
        );
    }
}
