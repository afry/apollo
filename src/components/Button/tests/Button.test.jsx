import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

test('onClick', () => {
    const component = renderer.create(
        <Button onClick={()=>{}} /> 
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick();
});

test('onMouseEnter', () => {
    const component = renderer.create(
        <Button onMouseEnter={()=>{}} /> 
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();
});

test('onMouseLeave', () => {
    const component = renderer.create(
        <Button onMouseLeave={()=>{}} /> 
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseLeave();
});
