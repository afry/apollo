import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink';

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
      const navlink = shallow(<NavLink disabled />);
      expect(navlink.prop('disabled')).toBe(true);
    });

    it('sets the disabled attribute on the navlink', () => {
      const navlink = shallow(<NavLink />);
      expect(navlink.prop('disabled')).toBe(false);
    });
  });
});
