import React from 'react';
import { findByTestAttr, checkProps } from '../test/testUtils';
import { shallow } from 'enzyme';
import NewWordButton from './NewWordButton';

const defaultProps = {
    display: false
};

const setup = (props) => {
    const setupProps = {...defaultProps, ...props};
    const wrapper = shallow(<NewWordButton {...setupProps} />);
    return wrapper;
}

describe('`NewWordButon` render', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const comp = findByTestAttr(wrapper, 'new-word-comp');
        expect(comp.length).toBe(1);
    });
    test('renders button when word is successfully guessed', () => {
        const wrapper = setup({display: true});
        const button = findByTestAttr(wrapper, 'new-word-button');
        expect(button.length).toBe(1);
    });
    test('does not render button when word is not successfully guessed', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'new-word-button');
        expect(button.length).toBe(0);
    });
    test('runs `resetGame` when button is clicked ', () => {
        const resetActionMock = jest.fn();
        const wrapper = setup({display: true, resetAction: resetActionMock})
        const button = findByTestAttr(wrapper, 'new-word-button');
        button.simulate('click');
        expect(resetActionMock.mock.calls.length).toBe(1);
    });
    test('does not throw warning with expected props', () => {
        checkProps(NewWordButton, defaultProps);
    });
});

