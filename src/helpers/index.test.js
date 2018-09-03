import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    test('return correct count when there are no matching letters', () => {
        const letterMatchcount = getLetterMatchCount('love', secretWord);
        expect(letterMatchcount).toBe(0);
    });
    test('return correct count when there are 3 matching letters', () => {
        const letterMatchcount = getLetterMatchCount('train', secretWord);
        expect(letterMatchcount).toBe(3);
    });
    test('return correct count when there are duplicate letters in the guess', () => {
        const letterMatchcount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchcount).toBe(3);
    });
})