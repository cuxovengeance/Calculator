import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calculator from './Calculator';

configure({ adapter: new Adapter() });

let CalculatorProps = {
  equation: jest.fn(),
  setEquation: jest.fn(),
  input: jest.fn(),
  initialValue: jest.fn(),
  operation: jest.fn(),
  secondValue: jest.fn(),
};

describe('Calculator', () => {
  it('Execute displayInput function when i click one or more of the digits buttons', () => {
    CalculatorProps.data = [
      {
        input: '',
        initialValue: '',
        operation: '',
        secondValue: '',
      },
    ];
    let wrapper = mount(<Calculator {...CalculatorProps} />);
    const displayInput = jest.fn();

    wrapper.find('button').at([0]).simulate('click');
    expect(displayInput.mock.calls).not.toEqual('');
  });

  it('Execute displaySecondInput function when i click one or more of the digits buttons', () => {
    CalculatorProps.data = [
      {
        input: '',
        initialValue: '4',
        operation: '+',
        secondValue: '',
      },
    ];
    let wrapper = mount(<Calculator {...CalculatorProps} />);
    const displaySecondInput = jest.fn();

    wrapper.find('button').at([0]).simulate('click');
    expect(displaySecondInput.mock.calls).not.toEqual('');
  });

  it('Execute addOperation function when i click one of the operations buttons', () => {
    let wrapper = mount(<Calculator {...CalculatorProps} />);
    const addOperation = jest.fn();

    wrapper.find('#append').simulate('click');
    expect(addOperation.mock.calls).not.toEqual('');
  });

  it('Execute equal function when i click the = button', () => {
    let wrapper = mount(<Calculator {...CalculatorProps} />);
    const equal = jest.fn();

    wrapper.find('#equal').simulate('click');
    expect(equal.mock.calls).toEqual([]);
  });

  it('Execute cleanAll function when i click AC button and get ', () => {
    let wrapper = mount(<Calculator {...CalculatorProps} />);
    const cleanAll = jest.fn();

    wrapper.find('#ac').simulate('click');
    expect(cleanAll.mock.calls).toEqual([]);
  });
});
