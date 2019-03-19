/* global describe, it, expect, jest */
import React from 'react';
import {shallow} from 'enzyme';
import NavLink from '../NavLink';

describe('<NavLink />', () => {
  describe('onClick()', () => {
    it('is called when the navlink is clicked', () => {
      const spy = jest.fn();
      shallow(<NavLink onClick={spy} />).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('sets the disabled attribute on the navlink', () => {
      const button = shallow(<NavLink disabled />);
      expect(button.prop('disabled')).toBe(true);
    });

    it('sets the disabled attribute on the navlink', () => {
      const button = shallow(<NavLink disabled={false} />);
      expect(button.prop('disabled')).toBe(false);
    });
  });
});
