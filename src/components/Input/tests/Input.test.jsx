/* global it, describe, expect, jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input';

describe('<InputField />', () => {
  describe('onChange()', () => {
    it('is called when the input is changed', () => {
      const spy = jest.fn();
      const input = mount(<Input onChange={spy} />);
      input.find('input').simulate('change');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('sets the disabled attribute on the input', () => {
      const input = shallow(<Input disabled />);
      expect(input.find('input').prop('disabled')).toBe(true);
    });

    it('sets the disabled attribute on the input', () => {
      const input = shallow(<Input disabled={false} />);
      expect(input.find('input').prop('disabled')).toBe(false);
    });
  });

  describe('type', () => {
    it('sets the type attribute on the input to default', () => {
      const input = shallow(<Input />);
      expect(input.find('input').prop('type')).toBe('text');
    });

    it('sets the type attribute on the input to number', () => {
      const input = shallow(<Input type="number" />);
      expect(input.find('input').prop('type')).toBe('number');
    });

    it('sets the type attribute on the input to password', () => {
      const input = shallow(<Input type="password" />);
      expect(input.find('input').prop('type')).toBe('password');
    });

    it('sets the type attribute on the input to email', () => {
      const input = shallow(<Input type="email" />);
      expect(input.find('input').prop('type')).toBe('email');
    });

    it('sets the type attribute on the input to tel', () => {
      const input = shallow(<Input type="tel" />);
      expect(input.find('input').prop('type')).toBe('tel');
    });
  });

  describe('placeholder', () => {
    it('sets the placeholder attribute on the input', () => {
      const input = shallow(<Input placeholder="First Name" />);
      expect(input.find('input').prop('placeholder')).toBe('First Name');
    });
  });

  describe('required', () => {
    it('sets the required attribute on the input', () => {
      const input = shallow(<Input required />);
      expect(input.find('input').prop('required')).toBe(true);
    });

    it('sets the required attribute on the input', () => {
      const input = shallow(<Input required={false} />);
      expect(input.find('input').prop('required')).toBe(false);
    });
  });

  describe('readonly', () => {
    it('sets the readonly attribute on the input', () => {
      const input = shallow(<Input readOnly />);
      expect(input.find('input').prop('readOnly')).toBe(true);
    });

    it('sets the readonly attribute on the input', () => {
      const input = shallow(<Input readOnly={false} />);
      expect(input.find('input').prop('readOnly')).toBe(false);
    });
  });

  describe('autocomplete', () => {
    it('sets the autocomplete attribute on the input', () => {
      const input = shallow(<Input autoComplete="on" />);
      expect(input.find('input').prop('autoComplete')).toBe('on');
    });

    it('sets the autocomplete attribute on the input', () => {
      const input = shallow(<Input autoComplete="off" />);
      expect(input.find('input').prop('autoComplete')).toBe('off');
    });
  });

  describe('min', () => {
    it('sets the min attribute on the input', () => {
      const input = shallow(<Input min="4" type="number" />);
      expect(input.find('input').prop('min')).toBe('4');
    });
  });

  describe('max', () => {
    it('sets the max attribute on the input', () => {
      const input = shallow(<Input max="10" type="number" />);
      expect(input.find('input').prop('max')).toBe('10');
    });
  });

  describe('maxlength', () => {
    it('sets the maxlength attribute on the input', () => {
      const input = shallow(<Input maxLength="10" />);
      expect(input.find('input').prop('maxLength')).toBe('10');
    });
  });
});
