import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr as find, checkProps } from '../test/testUtils';
import Congrats from './Congrats';

const defaultProps = { success: false };

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Congrats {...setupProps} />);
}

test('renders without errors', () => {
    const wrapper = setup();
    const comp = find(wrapper, 'comp-congrats');
    expect(comp.length).toBe(1);
});

test('renders no text when success is false', () => {
    const wrapper = setup({success: false});
    const comp = find(wrapper, 'comp-congrats');
    expect(comp.text()).toBe('');
});

test('renders non empty congrats message when success is true', () => {
    const wrapper = setup({success: true});
    const comp = find(wrapper, "congrats-message");
    expect(comp.text().length).not.toBe(0);
});

test('Guessed does not throw warning with expected props', () => {
    const expectedProps = { success: true };
    checkProps(Congrats, expectedProps);
})