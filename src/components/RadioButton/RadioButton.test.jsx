import React from 'react';
import { shallow, mount } from 'enzyme';
import RadioButton from './RadioButton';

describe('<RadioButton />', () => {
  describe('onChange()', () => {
    it('is called when the radio button is changed', () => {
      const spy = jest.fn();
      const radio = mount(<RadioButton id="MyRadioButton" onChange={spy} />);
      radio.find('input').simulate('change');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('checked', () => {
    it('sets the checked attribute on the radio button', () => {
      const radio = shallow(<RadioButton checked />);
      expect(radio.find('input').prop('checked')).toBe(true);
    });

    it('sets the checked attribute on the radio button', () => {
      const radio = shallow(<RadioButton checked={false} />);
      expect(radio.find('input').prop('checked')).toBe(false);
    });
  });

  describe('disabled', () => {
    it('sets the disabled attribute on the radio button', () => {
      const radio = shallow(<RadioButton disabled />);
      expect(radio.find('input').prop('disabled')).toBe(true);
    });

    it('sets the disabled attribute on the radio button', () => {
      const radio = shallow(<RadioButton disabled={false} />);
      expect(radio.find('input').prop('disabled')).toBe(false);
    });
  });

  describe('readonly', () => {
    it('sets the readonly attribute on the radio button', () => {
      const radio = shallow(<RadioButton readOnly />);
      expect(radio.find('input').prop('readOnly')).toBe(true);
    });

    it('sets the readonly attribute on the radio button', () => {
      const radio = shallow(<RadioButton readOnly={false} />);
      expect(radio.find('input').prop('readOnly')).toBe(false);
    });
  });
});
