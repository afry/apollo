import React from 'react';
import {shallow, mount} from 'enzyme';
import InputField from '../InputField';

describe('<InputField />', () => {
    describe('onChange()', () => {
        it('is called when the input field is changed', () => {
            const spy = jest.fn();
            const input = mount(<InputField id="MyInputField" onChange={spy} />);
            input.find('input').simulate('change');
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('onFocus()', () => {
        it('is called when the input field is focused', () => {
            const spy = jest.fn();
            const input = shallow(<InputField onFocus={spy} />);
            input.find('input').simulate('focus');
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('onBlur()', () => {
        it('is called when the input field is blurred', () => {
            const spy = jest.fn();
            const input = shallow(<InputField onBlur={spy} />);
            input.find('input').simulate('blur');
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('disabled', () => {
        it('sets the disabled attribute on the input field', () => {
            const input = shallow(<InputField disabled />);
            expect(input.find('input').prop('disabled')).toBe(true);
        });

        it('sets the disabled attribute on the input field', () => {
            const input = shallow(<InputField disabled={false} />);
            expect(input.find('input').prop('disabled')).toBe(false);
        });
    });

    describe('type', () => {
        it('sets the type attribute on the input field to default', () => {
            const input = shallow(<InputField />);
            expect(input.find('input').prop('type')).toBe('text');
        });

        it('sets the type attribute on the input field to number', () => {
            const input = shallow(<InputField type="number"/>);
            expect(input.find('input').prop('type')).toBe('number');
        });
        
        it('sets the type attribute on the input field to password', () => {
            const input = shallow(<InputField type="password" />);
            expect(input.find('input').prop('type')).toBe('password');
        });

        it('sets the type attribute on the input field to email', () => {
            const input = shallow(<InputField type="email" />);
            expect(input.find('input').prop('type')).toBe('email');
        });

        it('sets the type attribute on the input field to tel', () => {
            const input = shallow(<InputField type="tel" />);
            expect(input.find('input').prop('type')).toBe('tel');
        });
    });

    describe('placeholder', () => {
        it('sets the placeholder attribute on the input field', () => {
            const input = shallow(<InputField placeholder="First Name" />);
            expect(input.find('input').prop('placeholder')).toBe('First Name');
        });
    });

    describe('required', () => {
        it('sets the required attribute on the input field', () => {
            const input = shallow(<InputField required />);
            expect(input.find('input').prop('required')).toBe(true)
        });

        it('sets the required attribute on the input field', () => {
            const input = shallow(<InputField required={false} />);
            expect(input.find('input').prop('required')).toBe(false)
        });
    });

    describe('readonly', () => {
        it('sets the readonly attribute on the input field', () => {
            const input = shallow(<InputField readOnly />);
            expect(input.find('input').prop('readOnly')).toBe(true);
        });

        it('sets the readonly attribute on the input field', () => {
            const input = shallow(<InputField readOnly={false} />);
            expect(input.find('input').prop('readOnly')).toBe(false);
        });
    });

    describe('autocomplete', () => {
        it('sets the autocomplete attribute on the input field', () => {
            const input = shallow(<InputField autoComplete />);
            expect(input.find('input').prop('autoComplete')).toBe("on");
        });

        it('sets the autocomplete attribute on the input field', () => {
            const input = shallow(<InputField autoComplete={false} />);
            expect(input.find('input').prop('autoComplete')).toBe("off");
        });
    });

    describe('autofocus', () => {
        it('sets the autofocus attribute on the input field', () => {
            const input = shallow(<InputField autoFocus />);
            expect(input.find('input').prop('autoFocus')).toBe(true);
        });

        it('sets the autofocus attribute on the input field', () => {
            const input = shallow(<InputField autoFocus={false} />);
            expect(input.find('input').prop('autoFocus')).toBe(false);
        });
    });

    describe('min', () => {
        it('sets the min attribute on the input field', () => {
            const input = shallow(<InputField type="number" min="4" />);
            expect(input.find('input').prop('min')).toBe("4");
        });
    });

    describe('max', () => {
        it('sets the max attribute on the input field', () => {
            const input = shallow(<InputField type="number" max="10" />);
            expect(input.find('input').prop('max')).toBe("10");
        });
    });

    describe('maxlength', () => {
        it('sets the maxlength attribute on the input field', () => {
            const input = shallow(<InputField maxLength="10" />);
            expect(input.find('input').prop('maxLength')).toBe("10");
        });
    });
});
