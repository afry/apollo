/* global define, it, describe, expect, jest */
import React from 'react';
import { mount } from 'enzyme';
import Wizard from '../Wizard';
import WizardPage from '../../WizardPage';

describe('<Wizard />', () => {
  describe('onNext', () => {
    it('is called when the wizard move on to the next page', () => {
      const spy = jest.fn();
      const wizard = mount(<Wizard onNext={spy} title="My Wizard"><WizardPage title="Page1" /><WizardPage title="Page2" /></Wizard>);
      wizard.prop('onNext')(spy);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onPrevious', () => {
    it('is called when the wizard goes back the previous page', () => {
      const spy = jest.fn();
      const wizard = mount(<Wizard onPrevious={spy} title="My Wizard"><WizardPage title="Page1" /><WizardPage title="Page2" /></Wizard>);
      wizard.prop('onPrevious')(spy);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onCancel', () => {
    it('is called when the wizard is cancelled', () => {
      const spy = jest.fn();
      const wizard = mount(<Wizard onCancel={spy} title="My Wizard"><WizardPage title="Page1" /><WizardPage title="Page2" /></Wizard>);
      wizard.prop('onCancel')(spy);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onFinish', () => {
    it('is called when the wizard is finished', () => {
      const spy = jest.fn();
      const wizard = mount(<Wizard onFinish={spy} title="My Wizard"><WizardPage title="Page1" /><WizardPage title="Page2" /></Wizard>);
      wizard.prop('onFinish')(spy);
      expect(spy).toHaveBeenCalled();
    });
  });
});
