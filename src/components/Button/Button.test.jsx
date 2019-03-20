import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  describe('onClick()', () => {
    it('is called when the button is clicked', () => {
      const spy = jest.fn();
      shallow(<Button onClick={spy} />).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('sets the disabled attribute on the button', () => {
      const button = shallow(<Button disabled />);
      expect(button.prop('disabled')).toBe(true);
    });

    it('sets the disabled attribute on the button', () => {
      const button = shallow(<Button disabled={false} />);
      expect(button.prop('disabled')).toBe(false);
    });
  });

  describe('type', () => {
    it('sets the type attribute on the button to default', () => {
      const button = shallow(<Button />);
      expect(button.prop('type')).toBe('button');
    });

    it('sets the type attribute on the button to button', () => {
      const button = shallow(<Button type="button" />);
      expect(button.prop('type')).toBe('button');
    });

    it('sets the type attribute on the button to submit', () => {
      const button = shallow(<Button type="submit" />);
      expect(button.prop('type')).toBe('submit');
    });

    it('sets the type attribute on the button to reset', () => {
      const button = shallow(<Button type="reset" />);
      expect(button.prop('type')).toBe('reset');
    });
  });
});
