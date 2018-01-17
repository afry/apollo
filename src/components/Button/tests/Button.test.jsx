import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('<Button />', () => {
    describe('onClick()', () => {
        it('is called when the button is clicked', () => {
            const spy = jest.fn();
            renderer.create(<Button onClick={spy} />).toJSON().props.onClick();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('onFocus()', () => {
        it('is called when the button is focused', () => {
            const spy = jest.fn();
            renderer.create(<Button onFocus={spy} />).toJSON().props.onFocus();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('onBlur()', () => {
        it('is called when the button is blurred', () => {
            const spy = jest.fn();
            renderer.create(<Button onBlur={spy} />).toJSON().props.onBlur();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('disabled', () => {
        it('sets the disabled attribute on the button', () => {
            const button = renderer.create(<Button disabled />);
            expect(button.toJSON().props.disabled).toBe(true);
        });

        it('sets the disabled attribute on the button', () => {
            const button = renderer.create(<Button disabled={false} />);
            expect(button.toJSON().props.disabled).toBe(false);
        });
    });

    describe('type', () => {
        it('sets the type attribute on the button to default', () => {
            const button = renderer.create(<Button />);
            expect(button.toJSON().props.type).toBe('button');
        });

        it('sets the type attribute on the button to submit', () => {
            const button = renderer.create(<Button type='submit' />);
            expect(button.toJSON().props.type).toBe('submit');
        });

        it('sets the type attribute on the button to reset', () => {
            const button = renderer.create(<Button type='reset' />);
            expect(button.toJSON().props.type).toBe('reset');
        });
    });
});
