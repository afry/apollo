/* global define, it, describe, expect */
import React from 'react';
import {shallow} from 'enzyme';
import TextArea from '../TextArea';

describe('<TextArea />', () => {
  describe('disabled', () => {
    it('sets the disabled attribute on the text area', () => {
      const textarea = shallow(<TextArea disabled />);
      expect(textarea.find('textarea').prop('disabled')).toBe(true);
    });

    it('sets the disabled attribute on the text area', () => {
      const textarea = shallow(<TextArea disabled={false} />);
      expect(textarea.find('textarea').prop('disabled')).toBe(false);
    });
  });

  describe('placeholder', () => {
    it('sets the placeholder attribute on the text area', () => {
      const textarea = shallow(<TextArea placeholder="Placeholder" />);
      expect(textarea.find('textarea').prop('placeholder')).toBe('Placeholder');
    });
  });

  describe('required', () => {
    it('sets the required attribute on the text area', () => {
      const textarea = shallow(<TextArea required />);
      expect(textarea.find('textarea').prop('required')).toBe(true);
    });

    it('sets the required attribute on the text area', () => {
      const textarea = shallow(<TextArea required={false} />);
      expect(textarea.find('textarea').prop('required')).toBe(false);
    });
  });

  describe('readonly', () => {
    it('sets the readonly attribute on the text area', () => {
      const textarea = shallow(<TextArea readOnly />);
      expect(textarea.find('textarea').prop('readOnly')).toBe(true);
    });

    it('sets the readonly attribute on the text area', () => {
      const textarea = shallow(<TextArea readOnly={false} />);
      expect(textarea.find('textarea').prop('readOnly')).toBe(false);
    });
  });

  describe('maxlength', () => {
    it('sets the maxlength attribute on the text area', () => {
      const textarea = shallow(<TextArea maxLength="10" />);
      expect(textarea.find('textarea').prop('maxLength')).toBe('10');
    });
  });

  describe('rows', () => {
    it('sets the rows attribute on the text area', () => {
      const textarea = shallow(<TextArea rows="10" />);
      expect(textarea.find('textarea').prop('rows')).toBe('10');
    });
  });

  describe('columns', () => {
    it('sets the columns attribute on the text area', () => {
      const textarea = shallow(<TextArea columns="10" />);
      expect(textarea.find('textarea').prop('cols')).toBe('10');
    });
  });
});
