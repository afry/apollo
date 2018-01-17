import React from 'react';
import { Heading, Button } from '../src/apollo.js';

export default class Playground extends React.Component {
    render() {
        return (
            <div>
                <Heading element='h1' children={'Heading!'} />
                <Button onClick={()=>{ console.log("click"); }} onMouseEnter={()=>{ console.log("mouse enter"); }} onMouseLeave={()=>{ console.log("mouse leave"); }} children='Button' /> 
            </div>
        );
    }
}
