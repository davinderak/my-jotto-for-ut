import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr as find, checkProps } from '../test/testUtils'
import GuessedWord from './GuessedWord';

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWord {...setupProps} />)
}

describe('If there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []})
    });
    it('renders with crashing', () => {
        const comp = find(wrapper, 'comp-guessed-words');
        expect(comp.length).toBe(1);
    });
    it('renders instructions to guess a word', () => {
        const instructions = find(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    })
});

describe('If there are words guessed', () => {
    let wrapper;
    const guessedWords = [
        {guessedWord: 'Davinder', letterMatchCount: 4}, 
        {guessedWord: 'test', letterMatchCount: 2}
    ]
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });
    it('renders without error', () => {
        const comp = find(wrapper, 'comp-guessed-words');
        expect(comp.length).toBe(1);
    });
    it('renders guessed words section', () => {
        const guessedWordSection = find(wrapper, 'guessed-words');
        expect(guessedWordSection.length).toBe(1);
    });
    it('correct number of guessed words', () => {
        const guessedWord = find(wrapper, 'guessed-word');
        expect(guessedWord.length).toBe(guessedWords.length);
    });
    it('show correct index on items', () => {
        const guessedWordIndexes = find(wrapper, 'guessed-word-index');
        const indexTextSet = new Set(guessedWordIndexes.map(wrapper => wrapper.text()));
        const expectedSet = new Set(guessedWordIndexes.map((word, i) => (i + 1).toString()));
        expect(indexTextSet).toEqual(expectedSet);
    });
});

it('does not throw warning with expected props', () => {
    checkProps(GuessedWord, defaultProps);
});