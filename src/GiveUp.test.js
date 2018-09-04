import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';

import GiveUp from './GiveUp';

const defaultProps = {
    giveUp: false,
    secretWord: 'test'
};

const setup = (props=null) => {
    const setupProps = {...defaultProps, ...props};
    const wrapper = shallow(<GiveUp {...setupProps} />);
    return wrapper;
}

describe('renders', () => {
    test('renders without error', () => {

    });
    test('shows secretword when giveup button is clicked', () => {

    });
    test('does not throw warning with expected props', () => {

    });
});