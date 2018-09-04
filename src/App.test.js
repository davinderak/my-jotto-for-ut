import React from 'react';
import { shallow } from 'enzyme';

import App, { UnconnectedApp } from './App';
import { storeFactory } from '../test/testUtils';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />).dive();
    return wrapper;
}

describe('redux properties', () => {
  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProps = wrapper.instance().props.guessedWords;
    expect(guessedWordsProps).toBe(guessedWords);
    
  });
  test('`getSecretWord` action creator is a function on the props ', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  //setup app component with getSecretWordMock as the getSecretWord prop

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
    gaveUp: false
  }
  const wrapper = shallow(<UnconnectedApp {...props} />);
  wrapper.instance().componentDidMount();
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});