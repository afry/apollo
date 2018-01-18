/* global define, it, describe, expect, jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import DatePicker from '../DatePicker';

describe('<DatePicker />', () => {
  describe('onChange', () => {
    it('is called when the date picker is called', () => {
      const spy = jest.fn();
      const datepicker = mount(<DatePicker onChange={spy} />);
      datepicker.find('input').simulate('change');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('sets the disabled attribute on the date picker', () => {
      const datepicker = shallow(<DatePicker disabled />);
      expect(datepicker.find('input').prop('disabled')).toBe(true);
    });

    it('sets the disabled attribute on the date picker', () => {
      const datepicker = shallow(<DatePicker disabled={false} />);
      expect(datepicker.find('input').prop('disabled')).toBe(false);
    });
  });

  describe('readonly', () => {
    it('sets the readonly attribute on the date picker', () => {
      const datepicker = shallow(<DatePicker readOnly />);
      expect(datepicker.find('input').prop('readOnly')).toBe(true);
    });

    it('sets the readonly attribute on the date picker', () => {
      const datepicker = shallow(<DatePicker readOnly={false} />);
      expect(datepicker.find('input').prop('readOnly')).toBe(false);
    });
  });
});
