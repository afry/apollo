import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
    describe('onChange()', () => {
        it('is called when the checkbox is changed', () => {
            const spy = jest.fn();
            const checkbox = shallow(<Checkbox onChange={spy} />);
            checkbox.find('input').simulate('change');
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('onFocus()', () => {
        it('is called when the checkbox is focused', () => {
            const spy = jest.fn();
            const checkbox = shallow(<Checkbox onFocus={spy} />);
            checkbox.find('input').simulate('focus');
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('onBlur()', () => {
        it('is called when the checkbox is blurred', () => {
            const spy = jest.fn();
            const checkbox = shallow(<Checkbox onBlur={spy} />);
            checkbox.find('input').simulate('blur');
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('checked', () => {
        it('sets the checked attribute on the checkbox', () => {
            const checkbox = shallow(<Checkbox checked />);
            expect(checkbox.find('input').prop('checked')).toBe(true);
        });

        it('sets the checked attribute on the button', () => {
            const checkbox = shallow(<Checkbox checked={false} />);
            expect(checkbox.find('input').prop('checked')).toBe(false);
        });
    });

    describe('disabled', () => {
        it('sets the disabled attribute on the checkbox', () => {
            const checkbox = shallow(<Checkbox disabled />);
            expect(checkbox.find('input').prop('disabled')).toBe(true);
        });

        it('sets the disabled attribute on the button', () => {
            const checkbox = shallow(<Checkbox disabled={false} />);
            expect(checkbox.find('input').prop('disabled')).toBe(false);
        });
    });
});
